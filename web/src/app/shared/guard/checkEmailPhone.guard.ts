import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import {AuthService, CheckService} from '../services'

@Injectable()
export class checkEmailPhoneGuard implements CanActivate {

  constructor(private router: Router, public check: CheckService, public Auth: AuthService) { }


  canActivate() {

    if (!this.Auth.isLoggedin()) {
      this.router.navigate(['/auth/login']);
      return false;
    }

    return this.Auth.getCurrentUser()
      .then(res => {
        console.log('dataaa',res)
        if(this.check.checkEmailandPhone(res.email, res.phoneNumber)){
          return true
        }
        else{
          this.router.navigate(['/profile/update'])
          return false          
        }
      });
  }
  }

