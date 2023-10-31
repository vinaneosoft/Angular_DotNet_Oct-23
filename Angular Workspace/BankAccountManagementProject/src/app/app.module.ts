import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent // other declarations of components goes here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
    // other builtin modules, custom modules goes here
  ],
  providers: [],    // services are declared
  bootstrap: [AppComponent]
})
export class AppModule { }
