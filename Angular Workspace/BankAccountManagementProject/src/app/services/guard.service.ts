import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{
  constructor(private loginService:LoginService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.loginService.loginFlag) 
      return true;  // YES routes get activated : BankAccountComponent 
    else{
      window.alert("Please login to proceed.......");
      return false; // NO route will not be activated
    }
  }
 
}
