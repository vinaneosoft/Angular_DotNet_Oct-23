// 1st letter capital
var BankAccount = /** @class */ (function () {
    function BankAccount() {
    }
    //instance method, camel case
    BankAccount.prototype.deposit = function (depAmount) {
        this.accountBalance = this.accountBalance + depAmount;
        return this.accountBalance;
    };
    // implement withdraw method
    BankAccount.prototype.getDetails = function () {
        // return "Account Number:"+this.accountNumber+" Customer Id:"+this.customerId+" Account Type:"+this.accountType+" balance:"+this.accountBalance
        return "Account Number : ".concat(this.accountNumber, "\n                Customer Id: ").concat(this.customerId, "\n                type: ").concat(this.accountType, "\n                balance: ").concat(this.accountBalance);
    };
    return BankAccount;
}());
// new keyword : new object created
var account1; // custom types
account1 = new BankAccount(); // default constructor called   //1.
console.log(account1.getDetails());
console.log("--------");
console.log(account1);
// state change    //2.
account1.accountNumber = 7878787878;
account1.customerId = 111111;
account1.accountType = "Savings";
account1.accountBalance = 10000;
console.log(account1);
var account2 = new BankAccount();
account2.accountNumber = 8898787878;
account2.customerId = 121212;
account2.accountType = "Savings";
account2.accountBalance = 15000;
console.log(account2);
account1.deposit(5000);
console.log(account1);
console.log(account2);
