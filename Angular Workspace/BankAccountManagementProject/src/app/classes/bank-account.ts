import { Branch } from "./branch";

export class BankAccount {
    constructor(
        private accountNumber=0,
        private customerId=0,
        private customerName="AAA",
        private accountBalance=0,
        private accountType="savings",
        private accountCreateDate=new Date(),
        private customerProfilePic=""
        )
        
    {}
    get accNum(){
        return this.accountNumber;
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
        this.accountNumber=accountNumber
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

