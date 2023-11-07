import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css'],
  providers:[CounterService]  // component gets new object of services declared in array
})
export class Child3Component {
  count=this.counterService.counter;
  constructor(private counterService:CounterService){}
  getC(){
    this.counterService.incrementCounter();
    this.count=this.counterService.getCounter();
  }
}
