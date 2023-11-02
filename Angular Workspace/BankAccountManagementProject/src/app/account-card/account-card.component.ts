import { Component, Input } from '@angular/core';
import { BankAccount } from '../classes/bank-account';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.css']
})
export class AccountCardComponent {
  // data must be taken from parent
  // drilling : @input directive

  @Input()  // in child data taken as input from parent
  bankAccount:BankAccount=new BankAccount();
}
