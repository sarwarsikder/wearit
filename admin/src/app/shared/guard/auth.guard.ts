import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router, NavigationStart } from '@angular/router';
import { AuthService } from '../services';

@Injectable()
export class AuthGuard implements CanActivate {
  public currentURL: string = "";
  public currentPath: string = "";
  public fixedUrlPath=['auth','starter'];
  constructor(private router: Router, private Auth: AuthService) { 

  }

  canActivate() {
    if (!this.Auth.isLoggedin()) {
      this.router.navigate(['/auth/login']);
      return false;
    }

    return this.Auth.getCurrentUser()
      .then(resp => {
        const canActive = resp !== null && resp.role === 'admin';
        if (!canActive) {
          this.router.navigate(['/auth/login']);
          return false;
        }
        

        /**Check Admin Role*/
        this.currentURL = window.location.pathname;
        if(canActive){
          this.currentPath = this.currentURL.split("/")[1];
          if(!this.fixedUrlPath.includes(this.currentPath) && !resp.permission.includes(this.currentPath)){
            this.router.navigate(['/']);
          }
        } 
        

        return true;
      });
  }
}
