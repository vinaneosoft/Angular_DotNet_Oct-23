import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BankAccountComponent } from './bankaccount/bankaccount.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';

const routes: Routes = [
  { component:HomeComponent, path:'home'},
  { component:LoginComponent, path:'adminlogin'},
  { component:BankAccountComponent, path:'bankaccounts'},
  { component:BranchDetailsComponent, path:'branchdetails/:accno/:cid'},
  { component:HomeComponent, path:''},
  { component:ViewNotFoundComponent, path:'**'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

