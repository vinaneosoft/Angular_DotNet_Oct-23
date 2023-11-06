import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username="vina";
  password="Vina@123";
  login(adminLogin:any){
    if(adminLogin.value.username===this.username && adminLogin.value.password===this.password)
    {
      window.alert("you are logged in successfully....");
    }
  }
}
