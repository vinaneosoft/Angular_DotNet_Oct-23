import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  accountType:string="Savings Account";
  interestRate="8%";
  bankName="";
  constructor(){
    console.log(this.accountType);
    setTimeout(()=>{
      this.accountType="Salary Account"; 
      this.interestRate="6%"
      console.log(this.accountType);
      console.log(this.interestRate);
    }, 5000); // Model change
/* 
    setInterval(()=>{
      console.log(this.interestRate);
      console.log(this.accountType);
    },2000); */
  
  }// end

  showValues():void{
    console.log(this.interestRate);
    console.log(this.accountType);
  }
  convert(){
   this.bankName=this.bankName.toUpperCase();
  }
}
