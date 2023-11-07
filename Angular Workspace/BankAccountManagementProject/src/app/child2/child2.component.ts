import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  count=this.counterService.counter;
  constructor(private counterService:CounterService){
  }
  get(){
    this.counterService.incrementCounter();
    this.count=this.counterService.getCounter();
  }
}
