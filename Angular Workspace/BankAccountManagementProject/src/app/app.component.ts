import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './test.css']
})
export class AppComponent {
  bankName="AXIS BANK";
  branch:string;

  constructor(){
    this.branch="RABALE";
  }
}