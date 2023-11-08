import { Branch } from "./branch";

export class BankAccount {
    constructor(
        public id=0,
        public customerId=0,
        public customerName="AAA",
        public accountBalance=0,
        public accountType="savings",
        public accountCreateDate=new Date(),
        public customerProfilePic=""
        )
        
    {}
     get accNum(){
        return this.id;
    }
    get custId(){
        return this.customerId;
    }
    get accBalance(){
        return this.accountBalance;
    }
    get accType(){
        return this.accountType;
    }
    get custName(){
        return this.customerName;
    }
    get accountDate(){
        return this.accountCreateDate;
    }
    set accountDate(accountCreateDate:Date){
        this.accountCreateDate=accountCreateDate;
    }
    get profilePic(){
        return this.customerProfilePic;
    }
    set profilePic(customerProfilePic:string){
        this.customerProfilePic=customerProfilePic;
    }
    set accNum(accountNumber:number){
        this.id=accountNumber
    }
    set custId(customerId:number){
        this.customerId=customerId
    }
    set accBalance(accountBalance:number){
        this.accountBalance=accountBalance
    }
    set accType(accountType:string){
        this.accountType=accountType
    }
    set custName(customerName:string){
        this.customerName=customerName;
    } 
    deposit(deptAmount:number){

    }
    withdraw(withAmount:number){

    }
}

