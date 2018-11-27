import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  public loginObj:any = {username:"",password:""};
  private submitObj:Subscription;
  constructor(private srv:AppService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.submitObj){
      this.submitObj.unsubscribe();
    }
  }

  public onFormSubmit(){
    console.log(this.loginObj);
    this.submitObj = this.srv.sendToServer('http://vasudevkumaran.com/ang/login',this.loginObj).subscribe((result) => {
        console.log(result);
    });
  }


}
