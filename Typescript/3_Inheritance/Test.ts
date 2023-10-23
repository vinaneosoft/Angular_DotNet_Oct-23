class A{
    a:number;
    constructor(){
        console.log("in A"); 
        this.a=0;
    }
}

class B extends A{
    b:number;
    constructor(){
        console.log("in B"); 
        super();
        this.b=0;
       
    }
}

let obj=new B();
console.log(obj);
