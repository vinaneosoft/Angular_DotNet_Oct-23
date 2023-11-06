import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BankAccountComponent } from './bankaccount/bankaccount.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { FixedDepositComponent } from './fixed-deposit/fixed-deposit.component';
import { LoanComponent } from './loan/loan.component';
const routes: Routes = [
  { 
    component:HomeComponent, 
    path:'home',
    children:[
      { component:FixedDepositComponent, path:'fixeddeposit' },
      { component:LoanComponent, path:'loan' }
    ]
  },
  { component:LoginComponent, path:'adminlogin'},
  { component:BankAccountComponent, path:'bankaccounts'},
  { component:BranchDetailsComponent, path:'branchdetails/:accno/:cid'},
  { 
    redirectTo:'home', 
    path:'',
    pathMatch:'full'
  }, 
  { component:ViewNotFoundComponent, path:'**'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

