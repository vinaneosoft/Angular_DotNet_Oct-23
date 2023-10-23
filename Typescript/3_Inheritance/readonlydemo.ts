const city="mumbai";


class Employee{
    readonly employeeId:number; // instance var. constants
    employeeName:string;
    employeeSalary:number;
    static readonly companyName="Neosoft"; // single shared constants
    constructor(employeeId=0,employeeName="AAA",employeeSalary=0){
        this.employeeId=employeeId;
        this.employeeName=employeeName;
        this.employeeSalary=employeeSalary;
    }

    getMonthlySalary():number{   // bydefault public
        return this.employeeSalary;
    }
}
//Employee.companyName="Neosoft Pvt Ltd"; //Cannot assign to 'companyName' because it is a read-only property.

let emp1=new Employee(1,"Vina",78000);
let emp2=new Employee(2,"Amol",88000);
let emp3=new Employee(3,"Sarika",78000);
let emp4=new Employee(4,"Kumar",90000);

//emp1.employeeId=8; //Cannot assign to 'employeeId' because it is a read-only property.


const abc=89; // value constant
//abc=78;

// u can not use const references to to refer to other object
const emp5=new Employee(6,"Seema",67000);
emp5.employeeName="Meena";
emp5=emp1;