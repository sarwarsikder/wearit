import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../shared/services';

@Injectable()
export class AuthGuard implements CanActivate {

    private Auth: AuthService;
    constructor(private router: Router, auth: AuthService) {
      this.Auth = auth;
     }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.Auth.isLoggedin()) {
          return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/auth/sign-in']);
        return false;
    }
}