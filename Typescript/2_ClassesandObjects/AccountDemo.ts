// 1st letter capital

class BankAccount{
    // instance variables, camel case
    accountNumber:number;
    customerId:number;
    accountType:string;
    accountBalance:number;

    //instance method, camel case
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
// new keyword : new object created

let account1:BankAccount // custom types
account1=new BankAccount();  // default constructor called   //1.
console.log(account1.getDetails());
console.log("--------");
console.log(account1);
// state change    //2.
account1.accountNumber=7878787878;
account1.customerId=111111
account1.accountType="Savings";
account1.accountBalance=10000;
console.log(account1);