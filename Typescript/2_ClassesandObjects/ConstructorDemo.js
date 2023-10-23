// 1st letter capital
var BankAccount = /** @class */ (function () {
    /*
        constructor(){
            console.log("in default constructor");
            console.log("used to initialize instance variables of object");
        } */
    // more than one constructor not allowed in typescipt class
    function BankAccount(accountNumber, customerId, accountType, accountBalance) {
        if (accountNumber === void 0) { accountNumber = 0; }
        if (customerId === void 0) { customerId = 0; }
        if (accountType === void 0) { accountType = "Current"; }
        if (accountBalance === void 0) { accountBalance = 0; }
        this.accountNumber = accountNumber;
        this.customerId = customerId;
        this.accountBalance = accountBalance;
        this.accountType = accountType;
    }
    Object.defineProperty(BankAccount.prototype, "accNum", {
        get: function () {
            return this.accountNumber;
        },
        set: function (accountNumber) {
            this.accountNumber = accountNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount.prototype, "custId", {
        get: function () {
            return this.customerId;
        },
        set: function (customerId) {
            this.customerId = customerId;
        },
        enumerable: false,
        configurable: true
    });
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
account1 = new BankAccount(7878787878, 111111, "Savings", 10000); // p constructor called   //1.
console.log(account1.getDetails());
console.log("--------");
console.log(account1);
var account2 = new BankAccount(8898787878, 121212, "Savings", 15000);
console.log(account2);
account1.deposit(5000);
console.log(account1);
console.log(account2);
account2.accountType = "Salary";
var account3 = new BankAccount();
console.log(account3);
