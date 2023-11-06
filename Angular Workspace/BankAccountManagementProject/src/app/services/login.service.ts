import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; // 1. import service
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username="vina";
  password="Vina@123";
  loginFlag=false;
  constructor(private router:Router) // 2. inject service
  { }
// business logic must be added in service
  loginCheck(uname:string,pass:string){
   if(uname===this.username && pass===this.password) 
   {
     this.loginFlag=true;
     window.alert("You are logged in Successfully...");
     this.router.navigate(['home']);  //3. use service
   }
   else{
    this.loginFlag=false;
   }
  }
}
