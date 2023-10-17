// 1st letter capital
let a;
class BankAccount{
    // instance variables
    accountNumber:number;
    customerId:number;
    accountType:string;
    accountBalance:number;

    //instance method
    deposit(depAmount:number):number
    {
        this.accountBalance=this.accountBalance+depAmount;
        return this.accountBalance;
    }
    // implement withdraw method
    getDetails():string{
       // return "Account Number:"+this.accountNumber+" Customer Id:"+this.customerId+" Account Type:"+this.accountType+" balance:"+this.accountBalance
        return `Account Number : ${this.accountNumber}
                Customer Id: ${this.customerId}
                type: ${this.accountType}
                balance: ${this.accountBalance}`
    }
}