import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankAccount } from '../classes/bank-account';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  address="http://localhost:3000/accounts";
  constructor(private http:HttpClient) { }
  // adding account info in json file : post request : address, data
  addAccount(account:BankAccount){
    return this.http.post(this.address,account);
  }

  getAllAccounts(){
    return this.http.get(this.address);
  }
}
