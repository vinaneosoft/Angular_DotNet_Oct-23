import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent // other declarations of components goes here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // other builtin modules, custom modules goes here
  ],
  providers: [],    // services are declared
  bootstrap: [AppComponent]
})
export class AppModule { }
