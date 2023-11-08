import { Component } from '@angular/core';
import { CRUDService } from '../services/crud.service';
import { BankAccount } from '../classes/bank-account';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private crud:CRUDService){}
  
}
