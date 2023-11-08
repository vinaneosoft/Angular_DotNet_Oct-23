import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankAccount } from '../classes/bank-account';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  
  searchFlag=false;
  address="http://localhost:3000/accounts";
  constructor(private http:HttpClient) { }
  // adding account info in json file : post request : address, data
  addAccount(account:BankAccount){
    return this.http.post(this.address,account); // data is passed via body
  }
  getAllAccounts(){
    return this.http.get(this.address); // all records
  }
  getAccountByAccountNumber(accountNumber:number){
    return this.http.get(this.address+"/"+accountNumber) // address+num data is passed in // matching record
  }
  deleteAccountByAccountNumber(accountNumber:number){
    return this.http.delete(this.address+"/"+accountNumber) // address+num // match record deleted
  }
  

}
