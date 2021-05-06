import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services';
import { TranslateService } from '@ngx-translate/core';
import { ToastyService } from 'ng2-toasty';
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";


@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  private Auth: AuthService;
  login_form: FormGroup;
  checkboxValue: any;
  public credentials = {
    email: '',
    password: ''
  };
  public submitted: boolean = false;

  constructor(auth: AuthService, public router: Router, 
    private translate: TranslateService, 
    private toasty: ToastyService, fb: FormBuilder) {
    this.Auth = auth;


    this.login_form = fb.group({
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            /^(\d{11}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/
          )
        ])
      ],
      password: [null, 
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ])
      ],
      terms: [false]
    });


  }

  login() {
    // for (let v in this.login_form.controls) {
    //   this.login_form.controls[v].markAsTouched();
    // }
    this.markFormTouched(this.login_form);
    if (this.login_form.valid) {
      // You will get form value if your form is valid
      var formValues = this.login_form.getRawValue();
      this.credentials.email = formValues.email;
      this.credentials.password = formValues.password;
      console.log(formValues.email)
      console.log(formValues.password)
      this.Auth.login(this.credentials).then(() => {
        const redirectUrl = sessionStorage.getItem('redirectUrl');
        if (redirectUrl) {
          sessionStorage.removeItem('redirectUrl');
          this.router.navigate([redirectUrl]);
        } else {
          this.router.navigate(['/']);
        }
      })
        .catch(() => {
          this.toasty.error(this.translate.instant('Your account is not activated or register. Please recheck again or contact to our admin to resolve it.'));
        });
    } else {
      this.login_form.controls["terms"].setValue(false);
    }
  }

  markFormTouched(group: FormGroup | FormArray) {
    Object.keys(group.controls).forEach((key: string) => {
      const control = group.controls[key];
      if (control instanceof FormGroup || control instanceof FormArray) {
        control.markAsTouched();
        this.markFormTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }


  // login(frm: any) {
  //   this.submitted = true;
  //   if (frm.invalid) {
  //     return;
  //   }

  //   this.Auth.login(this.credentials).then(() => {
  //     const redirectUrl = sessionStorage.getItem('redirectUrl');
  //     if (redirectUrl) {
  //       sessionStorage.removeItem('redirectUrl');
  //       this.router.navigate([redirectUrl]);
  //     } else {
  //       this.router.navigate(['/']);
  //     }
  //   })
  //     .catch(() => {
  //       this.toasty.error(this.translate.instant('Your account is not activated or register. Please recheck again or contact to our admin to resolve it.'));
  //     });
  // }
  
}
