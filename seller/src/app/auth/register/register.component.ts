import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/services';
import { ToastyService } from 'ng2-toasty';

@Component({
  templateUrl: 'register.html'
})
export class RegisterComponent implements OnInit {

  keyword = 'title';
  public malls = [];

    selectEvent(item) {
    //this.shop.mallId = item._id;
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    
  }

  public dialCode: any = '';
  public shop: any = {
    email: '',
    password: '',
    tailor: false,
    wholeSeller: false
  };
  public mallFilterSelected: any = {
    mall: ''
  };
  public confirmPassword: string = '';

  public issueDocumentOptions: any;
  public issueDocument: any;
  public submitted: boolean = false;
  public logoUrl: any;
  public currentUser: any;

  constructor(private auth: AuthService, public router: Router, private route: ActivatedRoute, private toasty: ToastyService) {
    this.logoUrl = route.snapshot.data['appConfig'] ? route.snapshot.data['appConfig'].siteLogo : '/assets/images/logo.jpg';
  }

  ngOnInit() {
    if (this.auth.isLoggedin()) {
      this.auth.getCurrentUser().then(user => {
        this.currentUser = user;
      });
    }

    this.auth.getMall().then(mall => {
      
      this.malls = mall.items;
      
    });

    // TODO - check if user login here or the link have access token
    // then we can query user and hide password field and show user info
    this.issueDocumentOptions = {
      url: window.appConfig.apiBaseUrl + '/shops/register/document',
      fileFieldName: 'file',
      hintText: 'Click or drag verificaiton document here',
      onFinish: (resp) => {
        this.issueDocument = resp.data;
      }
    };
  }

  public submit(form: any) {
    if(this.mallFilterSelected.mall != '')
    {
      this.shop.mallId = this.mallFilterSelected.mall._id;
    }
    else
    {
      delete this.shop["mallId"];
    }
    console.log(this.shop);
    this.submitted = true;
    if (form.invalid) {
      console.log(form);
      return;
    }

    if (this.shop.password !== this.confirmPassword) {
      return this.toasty.error('Password does not match.');
    }

    if (!this.issueDocument) {
      return this.toasty.error('Please upload document for verification.');
    }

    this.shop.phoneNumber = `${this.dialCode}${this.shop.phoneNumber}`;
    this.shop.verificationIssueId = this.issueDocument._id;
    this.auth.register(this.shop)
      .then(resp => {
        this.toasty.success('Your account has been created. Wait admin to verify.');
        this.router.navigate(['/auth/login']);
      })
      .catch(e => this.toasty.error(e.data.data.message || 'Something went wrong, please try again')); // TODO - implement me
  }

  public selectDial(event) {
    this.dialCode = event;
  }
}
