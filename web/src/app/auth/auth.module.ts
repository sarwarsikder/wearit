import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { GoogleLoginButtonComponent } from './socials-login/google-login-button.component';
import { FacebookLoginButtonComponent } from './socials-login/facebook-login-button.component';

// social login, check document here https://github.com/abacritt/angularx-social-login#readme
import { SocialAuthService, SocialLoginModule, SocialAuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

import { UtilsModule } from '../utils/utils.module';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'signup',
  component: SignupComponent
}, {
  path: 'forgot',
  component: ForgotComponent
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule,
    SocialLoginModule,
    UtilsModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotComponent,
    GoogleLoginButtonComponent,
    FacebookLoginButtonComponent
  ],
  exports: [
    GoogleLoginButtonComponent,
    FacebookLoginButtonComponent
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            window.appConfig.googleClientId,
            {
              scope: 'profile email'
            } as any
          ),
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider(
            window.appConfig.facebookAppId,
            {
              scope: 'email',
              return_scopes: true,
              enable_profile_selector: true
            } as any
          ),
        }
      ],
    } as SocialAuthServiceConfig,
  }]
})

export class AuthModule { }
