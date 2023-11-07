import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  constructor(private http:HttpClient) { }

  test(){
    console.log("test called......");
    this.http.get("http://localhost:3000/accounts").subscribe(
      {
        next:(res)=>console.log(res),
        error:(res)=>console.log(res)
      }
    );
  }
}
