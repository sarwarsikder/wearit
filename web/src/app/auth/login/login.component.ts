import { Component } from '@angular/core';
import { AuthService } from '../../shared/services';
import { TranslateService } from '@ngx-translate/core';
import { ToastyService } from 'ng2-toasty';
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http"
import { Router, ActivatedRoute } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';


// const httpOptions = {
//   headers: new HttpHeaders({'Access-Control-Allow-Origin':'*', 'Content-Type': 'application/json' })
// };

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

  constructor(auth: AuthService, private router: Router, 
    private translate: TranslateService, 
    private toasty: ToastyService, fb: FormBuilder, public http: HttpClient,
    private socialAuthService : SocialAuthService,
    private route: ActivatedRoute) {

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

  ngOnInit() {
    this.route
             .queryParams
             .subscribe(params => {
                 console.log('params: ' + JSON.stringify(params));
                 let at = params['#access_token'];
                 console.log('access_token: ' + at);
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

async  signInWithInsta(){
    let auth = this.Auth;
    let router = this.router;
    let toastify = this.toasty;
    let translate = this.translate;
    let instagramRedirectUri = window.appConfig.instagramRedirectUri;
    let instagramClientId = window.appConfig.instagramClientId;
    let popupWidth = 700,
    popupHeight = 500,
    popupLeft = (window.screen.width - popupWidth) / 2,
    popupTop = (window.screen.height - popupHeight) / 2;
// Url needs to point to instagram_auth.php
    let popup = window.open('instagram_auth.php', '', 'width='+popupWidth+',height='+popupHeight+',left='+popupLeft+',top='+popupTop+'');
    popup.onload = function() {
  // console.log("here I am 1")
    // Open authorize url in pop-up
    if(window.location.hash.length == 0) {
        popup.open('https://api.instagram.com/oauth/authorize?client_id='+instagramClientId+'&redirect_uri='+instagramRedirectUri+'&scope=user_profile&response_type=code', '_self');
    }
    // An interval runs to get the access token from the pop-up
    let interval = setInterval(async function() {
        try {

          const urlParams = new URLSearchParams(popup.location.search);
          const myParam = urlParams.get('code');
          if(myParam){
            console.log('code', myParam)
            // console.log("here I am final")
            clearInterval(interval);
            popup.close();
            toastify.success(translate.instant('Please wait...You will redirect soon.'))
            let data = await auth.socialLogin('instagram', myParam);
            
            window.location.href = "/";
        }
        }
        catch(evt) {

        }
    }, 300);
};
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
}