import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from '../test1/test1.component';
import { Test2Component } from './test2/test2.component';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    Test1Component,
    Test2Component
  ],
  imports: [
    CommonModule, MatInputModule
  ],
  exports:[
    Test2Component
  ]
})
export class BankLoanModule { }
