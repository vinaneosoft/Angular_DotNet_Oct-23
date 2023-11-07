import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter=0;  // shared among multiple components
  constructor() { }
  incrementCounter():void{
    this.counter++;
  }
  getCounter():number{
    return this.counter;
  }
}
