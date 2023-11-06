import { Component } from '@angular/core';
import { Branch } from '../classes/branch';
import { AccountBranch } from '../classes/account-branch';

@Component({
  selector: 'app-branch-details',
  templateUrl: './branch-details.component.html',
  styleUrls: ['./branch-details.component.css']
})
export class BranchDetailsComponent {


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
}
