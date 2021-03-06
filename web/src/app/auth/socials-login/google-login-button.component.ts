import { Component } from '@angular/core';
import { AuthService } from '../../shared/services';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { ToastyService } from 'ng2-toasty';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'google-login',
  template: '<button class="btn btn-warning btn-block log-social" (click)="signInWithGoogle()"><i class="fa fa-google"></i></button>'
})
export class GoogleLoginButtonComponent {
  private Auth: AuthService;

  constructor(private translate: TranslateService, private router: Router, auth: AuthService, private socialAuthService: SocialAuthService, private toasty: ToastyService) {
    this.Auth = auth;
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((resp) => {
        this.Auth.socialLogin('google', resp.authToken);
        this.router.navigate(['/']);
      }).catch(err => this.toasty.error(this.translate.instant('Something went wrong, please try again.')));
  }
}