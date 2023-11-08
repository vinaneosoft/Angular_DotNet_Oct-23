import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BankAccountComponent } from './bankaccount/bankaccount.component';
import { OrderbyPipe } from './custompipes/orderby.pipe';
import { AccountCardComponent } from './account-card/account-card.component';
import { LoginComponent } from './login/login.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { FixedDepositComponent } from './fixed-deposit/fixed-deposit.component';
import { LoanComponent } from './loan/loan.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { CounterService } from './services/counter.service';
import { GuardService } from './services/guard.service';
import { LoginService } from './services/login.service';
import { Child3Component } from './child3/child3.component';
import { CRUDService } from './services/crud.service';
import {HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    BankAccountComponent,
    OrderbyPipe,
    AccountCardComponent,
    LoginComponent,
    BranchDetailsComponent,
    ViewNotFoundComponent,
    FixedDepositComponent,
    LoanComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    SearchComponent // other declarations of components,pipes goes here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule
    // other builtin modules, custom modules goes here
  ],
  providers: [CounterService, GuardService, LoginService, CRUDService],    // services are declared
  bootstrap: [AppComponent]
})
export class AppModule { }
