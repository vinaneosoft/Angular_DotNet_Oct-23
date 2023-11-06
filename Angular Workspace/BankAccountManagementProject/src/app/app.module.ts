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
    ViewNotFoundComponent // other declarations of components,pipes goes here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule
    // other builtin modules, custom modules goes here
  ],
  providers: [],    // services are declared
  bootstrap: [AppComponent]
})
export class AppModule { }
