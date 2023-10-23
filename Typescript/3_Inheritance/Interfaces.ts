interface FatherIntf{
    dream():string;
}
 interface MotherIntf{
    dream():string;
 }

 class Kid1 implements FatherIntf,MotherIntf{
    dream():string{
        return "Lawyer";
    }
 }

 class Kid2 implements FatherIntf,MotherIntf{
    dream():string{
        return "Doctor";
    }
 }