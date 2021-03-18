import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../shared/services';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  private Auth: AuthService;
  constructor(public router: Router, auth: AuthService, private toastr: ToastrService) {
    this.Auth = auth;
   }

  ngOnInit(): void {
    if (this.Auth.isLoggedin()) {
      this.router.navigate(['/dashboard']);
    }
  }

  public credentials = {
    email: '',
    password: ''
  };
  public submitted: boolean = false;

  public submit(frm: any) {
    this.submitted = true;
    
    if (frm.invalid) {
      return;
    }

    this.Auth.login(this.credentials).then((resp) => {
      
      const redirectUrl = sessionStorage.getItem('redirectUrl');
      if (redirectUrl) {
        sessionStorage.removeItem('redirectUrl');
        this.router.navigate([redirectUrl]);
      } else {
        this.router.navigate(['/dashboard']);
      }
    })
      .catch((error) => {
        
        if(error.data != undefined)
        {
          this.toastr.error(error.data.message);
        }
          // this.toastr.error("Your account is not activated or register. Please recheck again or contact to our admin to resolve it.");
        });
  }

}
