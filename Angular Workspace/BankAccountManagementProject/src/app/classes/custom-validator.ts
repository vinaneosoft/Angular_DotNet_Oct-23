import { AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidators {
    static passwordValidation(inputForm:AbstractControl): {} | null {
        //AbstractControl <- accountInputForm:FormGroup //custPass
                           //confirmPass
        let password=inputForm.value.custPass;
        let confirmPassword=inputForm.value.confirmPass;
       // console.log(password);
       // console.log(confirmPassword);
        if(password===confirmPassword)
          return null;
        else    
          return { passmatch:true }
    }
}
