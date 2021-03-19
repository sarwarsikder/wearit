import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../shared/services';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private Auth: AuthService;
  constructor(public router: Router, auth: AuthService ,private toastr: ToastrService) { 
    this.Auth = auth;
    this.Auth.removeToken();
  }

  ngOnInit(): void {
  }

  public account: any = {
    email: '',
    password: '',
    phone: '',
    name: '',
    address: '',
    isFileUploaded: false,
    isProfilePicUpdated: false,
    photo: null,
    nid: null
  };

  public file: any = {
    
  }
  
  public name: any = {
    firstName: '',
    lastName: ''
  };
  public input: any = {
    rePassword: ''
  };
  public submitted: boolean = false;

  files: File[] = [];
  pictures: File[] = [];
  firstUploadRemove = 0;

  public submit(frm: any) {
    this.submitted = true;
    
    if (frm.invalid) {
      return;
    }

    if (this.account.password !== this.input.rePassword) {
      this.toastr.error('Confirm password doest not match');
      return;
    }

    // if (!this.account.isFileUploaded) {
    //   this.toastr.error('NID / Passporet is required');
    //   return;
    // }

    this.account.name = this.name.firstName + " " + this.name.lastName;

    console.log(this.account)
    var formData = new FormData();

    formData.append("email", this.account.email);
    formData.append("name", this.account.name);
    formData.append("address", this.account.address);
    formData.append("password", this.account.password);
    formData.append("nid", this.account.nid);
    formData.append("photo", this.account.photo);
    formData.append("type", "delivery");
    formData.append("phoneNumber", this.account.phone);

    this.Auth.register(formData)
      .then(resp => {
        this.toastr.success('Your account has been created, please verify your email then login');
        this.router.navigate(['/auth/sign-in']);
      })
      .catch(err => {
        this.account = {
          email: '',
          password: '',
          phoneNumber: '',
          name: ''
        };
        this.name = {
          firstName: '',
          lastName: ''
        };
        this.input = {
          rePassword: ''
        };
        this.files = [];
        this.pictures = [];
        this.toastr.error(err.data.message);
      });
  }

	onSelect(event, type) {
		//console.log(event);
    if(type == 'file')
    {
		  this.files.push(...event.addedFiles);
      this.account.isFileUploaded = true;
      this.account.nid = event.addedFiles[0];
    }
    else{
      this.pictures.push(...event.addedFiles);
      this.account.isProfilePicUpdated = true;
      this.account.photo = event.addedFiles[0];
    }
	}

	onRemove(event, type) {
		//console.log(event);
		
    if(type == 'file')
    {
		  this.files.splice(this.files.indexOf(event), 1);
      this.account.isFileUploaded = false;
      this.firstUploadRemove = 1;
      this.account.nid = null;
    }
    else{
      this.pictures.splice(this.pictures.indexOf(event), 1);
      this.account.isProfilePicUpdated = false;
      this.account.photo = null;
    }
	}

}
