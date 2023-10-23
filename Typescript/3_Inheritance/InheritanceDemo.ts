class Employee{
    constructor(public employeeId=0,public employeeName="AAA", public employeeSalary=0){
    }
}
class Trainer extends Employee{
    constructor(public extraPay=0,public trainerType="ABC"){
        super();
    }
}
// intialization process is from superclass to subclass
// initialization sequence :superclass constructor to subclass constructor
// own cosntr: maintain calling seq , call superclass con from subclass using super

let trainer1=new Trainer(450,"Techincal");
trainer1.employeeId=999;
trainer1.employeeName="Vina Patil";
trainer1.employeeSalary=90000;
console.log(trainer1);