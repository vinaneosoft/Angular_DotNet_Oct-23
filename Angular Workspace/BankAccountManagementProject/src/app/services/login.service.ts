import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; // 1. import service
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username="vina";
  password="Vina@123";
  loginFlag=false;
  private failureMessage=""; 
  constructor(private router:Router) // 2. inject service // inject guard service here
  { }
// business logic must be added in service
  loginCheck(uname:string,pass:string):string{
   if(uname===this.username && pass===this.password) 
   {
     this.loginFlag=true;
     window.alert("You are logged in Successfully...");
     this.router.navigate(['home']);  //3. use service // use guard service pathh variable to navitage
     this.failureMessage="";
   }
   else{
    this.loginFlag=false;
    this.failureMessage="INCORRECT USERNAME OR PASSWORD";
   }
   return this.failureMessage;
  }
}
