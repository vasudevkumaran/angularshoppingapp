import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit,AfterViewInit {
  
  public registerObj:any = {username:"Vasudev",password:"1234535"};
  public firstName:String = "Vasudev";
  public isPass:Boolean = true;
  public mark:Number = 12;
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
   
   }

  

}
