import { Component } from '@angular/core';
import { BankAccount } from '../classes/bank-account';
@Component({
  selector: 'app-bankaccount',
  templateUrl: './bankaccount.component.html',
  styleUrls: ['./bankaccount.component.css']
})
export class BankAccountComponent {

  accounts:BankAccount[]=[
    new BankAccount(22222222,1111,45000,"current"),
    new BankAccount(56565656,4444,15000,"savings"),
    new BankAccount(23232323,5757,95000,"current"),
    new BankAccount(12121212,7676,48000,"salary"),
    new BankAccount(65656565,4545,78000,"savings")
  ]
   //css key value pairs or js key value pairs
    //background-color   : backgroundColor
    //font-size  : fontSize
    //color : color
  h3StyleObject={
    'background-color':'yellow',
     color:'blueviolet',
     textAlign:'center'
  }
  constructor(){
    setTimeout(() => this.changeStyle(), 4000);
  }
  
  changeStyle(){
    this.h3StyleObject['background-color']='pink';
    this.h3StyleObject.color='yellow';
  }
  tableClassArray=['table', 'table-bordered',"table-responsive",'table-warning','fontClass'];

  thClassObject={
    'bg-success':true,
    'text-danger':false
  }
}
