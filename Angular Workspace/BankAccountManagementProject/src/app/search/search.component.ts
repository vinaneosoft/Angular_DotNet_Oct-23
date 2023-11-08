import { Component } from '@angular/core';
import { CRUDService } from '../services/crud.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private crud:CRUDService){}
  searchAcc(searchForm:any){
    console.log(searchForm.value);
    let accountNumber=parseInt(searchForm.value.accountNumber);
    this.crud.getAccountByAccountNumber(accountNumber).subscribe();
  }
}
