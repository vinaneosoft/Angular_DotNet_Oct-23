
class Employee{

}
class Trainer extends Employee{

}
class A{
    test(num:number):void {
         
    }

    getEmployee():Employee{
        return new Employee();
    }
}

class B extends A{
     getEmployee(): Trainer {
         return new Trainer();
     }

     test(no:number):string{
        return "";
     }
}
// method name same
// method paramater type and number : same
// return type
    //1. if primitive, then must be same
    //2. if void then can be any
    //3. if object then covariants are allowed