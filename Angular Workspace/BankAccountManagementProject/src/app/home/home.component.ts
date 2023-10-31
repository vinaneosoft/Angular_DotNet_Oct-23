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
  numbers={
    num1:0,
    num2:0,
    addition:0
  }
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
  addNums(){
    this.numbers.addition=this.numbers.num1+this.numbers.num2;
  }
}
