import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthRoutes } from './auth.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';

import { MediaModule } from '../media/media.module';
import { UtilsModule } from '../utils/utils.module';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule,
    MediaModule,
    UtilsModule,
    AutocompleteLibModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotComponent
  ],
  exports: [
  ],
  providers: [
  ]
})

export class AuthModule { }
