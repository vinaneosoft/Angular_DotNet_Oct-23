import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BankAccount } from '../classes/bank-account';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.css']
})
export class AccountCardComponent implements OnInit {
  
  // data must be taken from parent
  // drilling : @input directive

  @Input()  // in child data taken as input from parent
  bankAccount:BankAccount=new BankAccount();

  cardHeading="BANK ACCOUNT DETAILS";

   @Output()
  eventEmitter=new EventEmitter<string>();

  ngOnInit(): void {
      //console.log("1st lifecyle method of AccountCard......");
      this.eventEmitter.emit(this.cardHeading);
  }
}
