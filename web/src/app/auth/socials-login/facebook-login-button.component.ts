<<<<<<< HEAD
import { Component } from '@angular/core';
import { AuthService } from '../../shared/services';
import { Router } from '@angular/router';
import { SocialAuthService, FacebookLoginProvider } from 'angularx-social-login';
import { ToastyService } from 'ng2-toasty';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'facebook-login',
  template: '<button class="btn btn-warning btn-block log-social" (click)="signInWithFacebook()"><i class="fa fa-facebook"></i></button>'
})
export class FacebookLoginButtonComponent {
  private Auth: AuthService;

  constructor(private translate: TranslateService, private router: Router, auth: AuthService, private socialAuthService: SocialAuthService, private toasty: ToastyService) {
    this.Auth = auth;
  }

  signInWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID)
      .then((resp) => {
        this.Auth.socialLogin('facebook', resp.authToken);
        this.router.navigate(['/']);
      })
      .catch(err => this.toasty.error(this.translate.instant('Something went wrong, please try again.')));
  }
}
=======
import { Component } from '@angular/core';
import { AuthService } from '../../shared/services';
import { Router } from '@angular/router';
import { SocialAuthService, FacebookLoginProvider } from 'angularx-social-login';
import { ToastyService } from 'ng2-toasty';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'facebook-login',
  template: '<button class="btn btn-warning btn-block log-social" (click)="signInWithFacebook()"><i class="fa fa-facebook"></i></button>'
})
export class FacebookLoginButtonComponent {
  private Auth: AuthService;

  constructor(private translate: TranslateService, private router: Router, auth: AuthService, private socialAuthService: SocialAuthService, private toasty: ToastyService) {
    this.Auth = auth;
  }

  signInWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID)
      .then((resp) => {
        this.Auth.socialLogin('facebook', resp.authToken);
        this.router.navigate(['/']);
      })
      .catch(err => this.toasty.error(this.translate.instant('Something went wrong, please try again.')));
  }
}
>>>>>>> 212d24f73eaf1c856b53f3168db2350cb6296041
