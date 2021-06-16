import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import {AuthService} from '../services'

@Injectable()
export class checkEmailPhoneGuard implements CanActivate {

  constructor(private router: Router, public Auth: AuthService) { }


  canActivate() {
    if (this.Auth.isLoggedin()) {
      return this.Auth.getCurrentUser()
      .then(res => {
        if(!res.email||!res.phoneNumber){
          this.router.navigate(['/profile/update'])
          return false  
        }
        else{
           return true;      
        }
      });
    }else{
      return true;
    }  
   }
  }

