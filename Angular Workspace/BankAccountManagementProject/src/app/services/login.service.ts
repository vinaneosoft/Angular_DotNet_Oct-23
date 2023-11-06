import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username="vina";
  password="Vina@123";
  loginFlag=false;
  constructor() { }
// business logic must be added in service
  loginCheck(uname:string,pass:string){
   if(uname===this.username && pass===this.password) 
     this.loginFlag=true;
  }
}
