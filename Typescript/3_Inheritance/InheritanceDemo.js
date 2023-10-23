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
    return Trainer;
}(Employee));
// intialization process is from superclass to subclass
// initialization sequence :superclass constructor to subclass constructor
// own cosntr: maintain calling seq , call superclass con from subclass using super
var trainer1 = new Trainer(450, "Techincal");
trainer1.employeeId = 999;
trainer1.employeeName = "Vina Patil";
trainer1.employeeSalary = 90000;
console.log(trainer1);
