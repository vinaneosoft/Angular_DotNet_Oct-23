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


}
