class NeosoftEmployee{
    employeeId:string;
    static companyName:string;
    static counter:number;
    static{
        console.log("in static block");       
        NeosoftEmployee.companyName="Neosoft"
        this.counter=0;
    }
    constructor(public empName="AAA",public empSalary=0){
        console.log("in constructor");;
        NeosoftEmployee.counter++
        this.employeeId="NEO-"+NeosoftEmployee.counter;
    }
}

let emp1=new NeosoftEmployee("hari",67000); // NEO-1
let emp2=new NeosoftEmployee("pari",97000); // NEO-2 