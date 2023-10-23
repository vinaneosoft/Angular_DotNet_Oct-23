
class BankAccount{
    // shortcut to declare and initialize instance variables in one place
    constructor(private accountNumber=0,private customerId=0,public accountType="Current",public accountBalance=0){
    }
    get accNum(){
        return this.accountNumber;
    }
    set accNum(accountNumber){
        this.accountNumber=accountNumber;
    }
    get custId(){
        return this.customerId;
    }
    set custId(customerId){
        this.customerId=customerId;
    }
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
account1=new BankAccount(7878787878,111111,"Savings",10000);  // p constructor called   //1.
console.log(account1);
let account2=new BankAccount(8898787878,121212,"Savings",15000);
console.log(account2);
let account3=new BankAccount();
console.log(account3);

