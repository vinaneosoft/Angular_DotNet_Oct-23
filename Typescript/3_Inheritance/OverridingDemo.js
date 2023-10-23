var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(employeeId, employeeName, employeeSalary) {
        if (employeeId === void 0) { employeeId = 0; }
        if (employeeName === void 0) { employeeName = "AAA"; }
        if (employeeSalary === void 0) { employeeSalary = 0; }
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.employeeSalary = employeeSalary;
    }
    Employee.prototype.getMonthlySalary = function () {
        return this.employeeSalary;
    };
    return Employee;
}());
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(extraPay, trainerType) {
        if (extraPay === void 0) { extraPay = 0; }
        if (trainerType === void 0) { trainerType = "ABC"; }
        var _this = _super.call(this) || this;
        _this.extraPay = extraPay;
        _this.trainerType = trainerType;
        return _this;
    }
    Trainer.prototype.test = function () {
        this.e = 0;
    };
    // inherited overriden property
    Trainer.prototype.getMonthlySalary = function () {
        return this.employeeSalary + this.extraPay;
    };
    return Trainer;
}(Employee)); //protected property scope ended here
var employee = new Employee(111, "Poonam Pujari", 56000);
console.log(employee);
console.log(employee.getMonthlySalary());
var employee2 = new Trainer(900, "Techincal"); // subclass 
employee2.employeeId = 999;
employee2.employeeName = "Vina Patil";
employee2.employeeSalary = 90000;
console.log(employee2);
console.log(employee2.getMonthlySalary()); // subclass method  // function overriding
