import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  public account: any = {
    email: '',
    password: '',
    phoneNumber: '',
    name: '',
    isFileUploaded: false,
    isProfilePicUpdated: false
  };
  public name: any = {
    firstName: '',
    lastName: ''
  };
  public input: any = {
    rePassword: ''
  };
  public submitted: boolean = false;

  public submit(frm: any) {
    this.submitted = true;
    
    if (frm.invalid) {
      return;
    }

    if (this.account.password !== this.input.rePassword) {
      this.toastr.error('Confirm password doest not match');
    }

    if (!this.account.isFileUploaded) {
      this.toastr.error('NID / Passporet is required');
    }

    this.account.name = this.name.firstName + " " + this.name.lastName;

    console.log(this.account);
  }

  files: File[] = [];
  pictures: File[] = [];
  firstUploadRemove = 0;

	onSelect(event, type) {
		//console.log(event);
    if(type == 'file')
    {
		  this.files.push(...event.addedFiles);
      this.account.isFileUploaded = true;
      this.account.nid = event.addedFiles;
    }
    else{
      this.pictures.push(...event.addedFiles);
      this.account.isProfilePicUpdated = true;
      this.account.picture = event.addedFiles;
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
      this.account.picture = null;
    }
	}

}
