import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BankAccountComponent } from './bankaccount/bankaccount.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component';

const routes: Routes = [
  { component:HomeComponent, path:'home'},
  { component:LoginComponent, path:'adminlogin'},
  { component:BankAccountComponent, path:'bankaccounts'},
  { component:BranchDetailsComponent, path:'branchdetails/:accno'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

