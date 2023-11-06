import { Component } from '@angular/core';
import { Branch } from '../classes/branch';
import { AccountBranch } from '../classes/account-branch';
import { ActivatedRoute } from '@angular/router'; // built in service, API to see details of active route
@Component({
  selector: 'app-branch-details',
  templateUrl: './branch-details.component.html',
  styleUrls: ['./branch-details.component.css']
})
export class BranchDetailsComponent {
  accountNumber=0; 
  rabaleBranch=new Branch('AR2344', 'Axis Bank, Rabale', 'Plot no.3, MG Road, Rabale', '9898989898')
  belapurBranch=new Branch('AB2344', 'Axis Bank, Belapur', 'Plot no.1, Prabhat Road, Belapur', '909090909')
  vashiBranch=new Branch('AV2344', 'Axis Bank, Vashi', 'Plot no.2, Jahangir Road, Vashi', '8080808080')
  accountBranchDetails:AccountBranch[]=[
    new AccountBranch(22222222,this.rabaleBranch),
    new AccountBranch(90909090,this.vashiBranch),
    new AccountBranch(12121212,this.vashiBranch),
    new AccountBranch(65656565,this.belapurBranch),
    new AccountBranch(56565656,this.rabaleBranch),
    new AccountBranch(23232323,this.rabaleBranch)
  ]
  constructor(private currentRoute:ActivatedRoute){ // when contructor gets called, service object gets injected automatically
     let routeParam=currentRoute.snapshot.params['accno'];  // route params always of type string 
     this.accountNumber=parseInt(routeParam);
     console.log(this.accountNumber);
  }
  findBranch(){
    // find record in accountBranchDetails matching with accountNumber passed from Route
    // display object details on html page
  }
}
