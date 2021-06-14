import { Component } from '@angular/core';
import { AuthService } from '../../shared/services';
import { TranslateService } from '@ngx-translate/core';
import { ToastyService } from 'ng2-toasty';
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http"
import { Router, ActivatedRoute } from '@angular/router';
// import { environment } from '../../../environments/environment';
// import { tap } from 'rxjs/operators/tap';
// import { HttpClientModule } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Access-Control-Allow-Origin':'*', 'Content-Type': 'application/json' })
};

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
    private toasty: ToastyService, fb: FormBuilder, public http: HttpClient,
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

  signInWithInsta(code){

  //   const data = { client_id: '819247062130628',
  //           redirect_url: 'https://www.google.com',
  //           scope: 'user_profile,user_media',
  //           response_type: 'code'
  //  }
    
    // this.http.post('http://localhost:8080/v1/users/insta', data)

    try {
      const body = new HttpParams()
        .set('client_id', '819247062130628')
        .set('redirect_uri', 'https://www.google.com/')
        .set('scope', 'user_profile,user_media')
        .set('response_type', 'code');
  
      return this.http
        .post('https://api.instagram.com/oauth/authorize?client_id=819247062130628&redirect_uri=https://www.google.com&scope=user_profile,user_media&response_type=code', null, httpOptions)
        .subscribe(res => console.log('res', res))
    } catch (err) {
      return err;
    }
  
  

    // let url = `https://api.instagram.com/oauth/authorize?client_id=819247062130628&redirect_uri=https://www.google.com/&scope=user_profile,user_media&response_type=code`;
    // console.log(url);
    // window.location.href = url;


  //   let url = `https://api.instagram.com/oauth/authorize?client_id=819247062130628&redirect_uri=https://www.google.com/&scope=user_profile,user_media&response_type=code`

  //   window.location.href = url
  //   console.log(window.location.href)
  //  const data = { client_id: '819247062130628',
  //           redirect_url: 'https://www.google.com',
  //           scope: 'user_profile,user_media',
  //           response_type: 'code'
  //  }

//   console.log(data)

    // this.http.post<any>('https://api.instagram.com/oauth/authorize',data).subscribe({
    //     next: data => {
    //        console.log(data) 
    //     },
    //     error: error => {
    //         console.error('There was an error!', error);
    //     }
    // })

    // window.location.href = `https://api.instagram.com/oauth/authorize?client_id=${environment.instagramClientId}&redirect_uri=${environment.instagramRedirectUri}&scope=user_profile,user_media&response_type=code`
    //let url = `https://api.instagram.com/oauth/authorize?client_id=${environment.instagramClientId}&redirect_uri=${environment.instagramRedirectUri}&scope=user_profile,user_media&response_type=code`
    // return this.http.get(url)
    // this.router.navigateByUrl(`https://api.instagram.com/oauth/authorize?client_id=${environment.instagramClientId}&redirect_uri=${environment.instagramRedirectUri}&scope=user_profile,user_media&response_type=code`);
    // console.log('Waiting')
    
      // const body = new HttpParams()
      //   .set('client_id', "2353717724782027")
      //   .set('client_secret', "197b319ce7ead80bd914a7237d11b65d")
      //   .set('grant_type', 'authorization_code')
      //   .set('redirect_uri', "https://www.google.com/")
      //   .set('code', code)
      //   // .set('auth', 'no-auth');

      //   // console.log('AGAIN')
      //    this.http
      //   .post('https://api.instagram.com/oauth/access_token', body.toString(), {
      //     headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      //   }).pipe(
      //     tap(res => {
      //       console.log('found?',res)
      //     })
      //   );

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
