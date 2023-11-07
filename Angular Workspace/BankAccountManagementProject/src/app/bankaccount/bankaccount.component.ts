import { Component } from '@angular/core';
import { BankAccount } from '../classes/bank-account';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../classes/custom-validator';
import { CRUDService } from '../services/crud.service';
@Component({
  selector: 'app-bankaccount',
  templateUrl: './bankaccount.component.html',
  styleUrls: ['./bankaccount.component.css']
})
export class BankAccountComponent {

  accountInputForm:FormGroup=new FormGroup({});
  passwordPattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{5,15}$";
  namePattern="^[A-Za-z ]*";

  accounts:BankAccount[]=[
    new BankAccount(22222222,1111,'Karan patil',45000.789,"current", new Date('1 Jun, 2000'),"assets/Images/1111.jpg"),
    new BankAccount(56565656,4444,'Ritesh Shaha',150000.5646,"savings",  new Date('11 Jun, 2000'),"assets/Images/4444.jpg"),
    new BankAccount(23232323,5757,'sameera Triveni',95000,"current", new Date('12 Aug, 2004'),"assets/Images/5757.jpg"),
    new BankAccount(12121212,7676,'Amar kumar',248000.11,"salary", new Date('21 Dec, 1999'),"assets/Images/7676.jpg"),
    new BankAccount(65656565,4545,'Krupa Singh',78000.7,"savings", new Date('30 March, 2003'),"assets/Images/4545.jpg"),
    new BankAccount(90909090,6666,'Baban Singh',5000.7,"savings", new Date('17 March, 2003'),"assets/Images/6666.jpg"),
  ]
  constructor(private crudService:CRUDService){
   
    setTimeout(() => this.changeStyle(), 4000);
    this.accountInputForm=new FormGroup({
      accNum:new FormControl("",Validators.required),
      custId:new FormControl("",Validators.required),
      custName:new FormControl("",[Validators.required, Validators.pattern(this.namePattern), Validators.minLength(2),Validators.maxLength(50)]),
      accBalance:new FormControl(1000,[Validators.required, Validators.min(1000), Validators.max(50000000)]),
      accType:new FormControl("current"),
      accountDate:new FormControl(""),
      profilePic:new FormControl(""),
      custEmail:new FormControl("@gmail.com",[Validators.required, Validators.email]),
      custPass:new FormControl("",[Validators.required,Validators.pattern(this.passwordPattern)]),
      confirmPass:new FormControl("",Validators.required)
    }, CustomValidators.passwordValidation);  // custom validation method, must match built validation method
    // FormGroup object automatically passed to custom validation function
// on FormControl, FormGroup
  }
   get accNum(){
    return this.accountInputForm.get('accountNumber');
   }
   get custId(){
    return this.accountInputForm.get('customerId');
   }
   get custName(){
    return this.accountInputForm.get('customerName');
   }
   get accBalance(){
    return this.accountInputForm.get('accountBalance');
   }
   get custEmail(){
    return this.accountInputForm.get('custEmail');
   }
   get custPass(){
    return this.accountInputForm.get('custPass');
   }
   get confirmPass(){
    return this.accountInputForm.get('confirmPass');
   }
   get accType(){
    return this.accountInputForm.get('accType');
   }

   get accountDate(){
    return this.accountInputForm.get('accountDate');
   }
   //css key value pairs or js key value pairs
    //background-color   : backgroundColor
    //font-size  : fontSize
    //color : color
  h3StyleObject={
    'background-color':'yellow',
     color:'blueviolet',
     textAlign:'center'
  }
 
  changeStyle(){
    this.h3StyleObject['background-color']='pink';
    this.h3StyleObject.color='yellow';
  }
  tableClassArray=['table', 'table-bordered',"table-responsive",'fontClass'];

  theadClassObject={
    'text-danger':true,
    'table-warning':true
  }
  orderProperty="accNum";
  orderBy(property:string){
    this.orderProperty=property;
  }
  headingFromChild="";
  fromChild(data:string){
   this.headingFromChild=data;
    
  }
  collectAccountDetails(){
    console.log(this.accountInputForm.value);
    let bankAccount=new BankAccount();
  //  this.bankAccount=this.accountInputForm.value;  // FormGroup : more values, bankAcount : less
    bankAccount.accNum=this.accountInputForm.value.accNum;
    bankAccount.accBalance=this.accountInputForm.value.accBalance;
    bankAccount.accType=this.accountInputForm.value.accType;
    bankAccount.accountDate=this.accountInputForm.value.accountDate;
    bankAccount.custId=this.accountInputForm.value.custId;
    bankAccount.custName=this.accountInputForm.value.custName;
    bankAccount.profilePic="assets/Images/noimage.jpg";
   // this.accounts.push(bankAccount);
    this.crudService.addAccount(bankAccount).subscribe({
      next:res=>console.log(res),
      error:res=>console.log(res)
    });
    
 //   let bankAccount=new BankAccount(this.accNum?.value, this.custId?.value,);
  }
  array=['border','border-2','border-danger'];
  // custom validation function
}


// function



/*
   checkRequired(){

    logic 

    if(balance>=1000)
      return null;
    else
      return {min:true}  validation fails
   }
*/