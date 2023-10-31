import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  accountType:string="Savings Account";
  constructor(){
    console.log(this.accountType);
    setTimeout(()=>{
      this.accountType="Salary Account"; 
      console.log(this.accountType);
    }, 5000); // Model change
  }
}
