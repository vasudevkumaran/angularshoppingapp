import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  public loginObj:any = {username:"",password:""};
  private submitObj:Subscription;
  private message:string = "";
  constructor(private srv:AppService,private router:Router) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.submitObj){
      this.submitObj.unsubscribe();
    }
  }

  public onFormSubmit(){
    console.log(this.loginObj);
    this.message = "processing...."
    this.submitObj = this.srv.sendToServer('http://vasudevkumaran.com/ang/login',this.loginObj).subscribe((data) => {
        console.log(data);
        if (data.result == 'OK'){
          //login success
          this.message = data.message;
          this.router.navigate(['main']);
        }else{
          //login failed
          this.message = "login failed";
        }

    });
  }


}
