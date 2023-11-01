export class BankAccount {
    constructor(private accountNumber=0,private customerId=0,private customerName="AAA",private accountBalance=0,private accountType="savings")
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

