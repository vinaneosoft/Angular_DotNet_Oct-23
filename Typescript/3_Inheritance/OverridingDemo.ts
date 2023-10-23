class Employee{
    protected e:number;
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
    test(){
        this.e=0;
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

// 1. Rules of overriding
// 2. upcasting


