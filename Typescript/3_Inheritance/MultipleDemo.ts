class Father{
    dream():string{
        return "doctor";
    }
}
class Mother {
    dream():string{
        return "engineer";
    }
}
class Child extends Father,Mother{

    achieveDream(){
       return  this.dream(); // inheritance ambiguity
    }
}


