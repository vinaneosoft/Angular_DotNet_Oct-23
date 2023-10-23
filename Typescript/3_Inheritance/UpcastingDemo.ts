class Employee{
    constructor(public employeeId=0,public employeeName="AAA", public employeeSalary=0){
    }
    getMonthlySalary():number{   // bydefault public
        return this.employeeSalary;
    }
}
class Trainer extends Employee{
    constructor(public extraPay=0,public trainerType="ABC"){
        super();
    }
    // inherited overriden property
    getMonthlySalary():number{
        return this.employeeSalary+this.extraPay;
    }
}//protected property scope ended here

let employee=new Employee(111,"Poonam Pujari", 56000);
console.log(employee);
console.log(employee.getMonthlySalary());
let employee2=new Trainer(900,"Technical");  // subclass 
employee2.employeeId=999;
employee2.employeeName="Vina Patil";
employee2.employeeSalary=90000;
console.log(employee2);
console.log(employee2.getMonthlySalary()); // subclass method  // function overriding

class Developer extends Employee{

}


let emp:Employee;
emp=new Employee(123,"Kirit Soni",67000);
emp.getMonthlySalary(); // Employee type
emp=new Trainer(400,"Nontechnical"); // upcasted  : own properties abstracted
emp.employeeId=899;
emp.employeeName="Sahil Pawr";
emp.employeeSalary=90000;
emp.getMonthlySalary(); // Trainer type

emp=new Developer();
// further calls


