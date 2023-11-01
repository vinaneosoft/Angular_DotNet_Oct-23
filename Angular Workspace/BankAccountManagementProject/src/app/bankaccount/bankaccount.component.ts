import { Component } from '@angular/core';
import { BankAccount } from '../classes/bank-account';
@Component({
  selector: 'app-bankaccount',
  templateUrl: './bankaccount.component.html',
  styleUrls: ['./bankaccount.component.css']
})
export class BankAccountComponent {

  accounts:BankAccount[]=[
    new BankAccount(22222222,1111,'Karan patil',45000.789,"current"),
    new BankAccount(56565656,4444,'Ritesh Shaha',150000.5646,"savings"),
    new BankAccount(23232323,5757,'sameera Triveni',95000,"current"),
    new BankAccount(12121212,7676,'karan kumar',248000.11,"salary"),
    new BankAccount(65656565,4545,'Krupa Singh',78000.7,"savings"),
    new BankAccount(90909090,6666,'Rama Singh',5000.7,"savings")
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
  tableClassArray=['table', 'table-bordered',"table-responsive",'fontClass'];

  theadClassObject={
    'text-danger':true,
    'table-warning':true
  }
}
