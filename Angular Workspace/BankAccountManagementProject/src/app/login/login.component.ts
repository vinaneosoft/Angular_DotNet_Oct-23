import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService:LoginService){
  }
  login(adminLogin:any){
    this.loginService.loginCheck(adminLogin.value.username, adminLogin.value.password);
  }
}
