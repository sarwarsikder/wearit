import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../shared/services';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  userImage = "assets/images/user.png"
  imageAlt = "userImage"

  private Auth: AuthService;
  public info: any = {};
  public submitted: boolean = false;

  constructor( public router: Router, auth: AuthService ,private toastr: ToastrService) {
    this.Auth = auth;
    if (this.Auth.isLoggedin()) {
      this.Auth.me().then((resp) => {
        this.info = resp.data;
        this.info.password = '';
      });
    }
   }

  ngOnInit(): void {
  }

  files: File[] = [];
  picture: File[] = [];

  public submit(frm: any) {
    this.submitted = true;
    
    if (frm.invalid) {
      return;
    }

    var formData = new FormData();

    formData.append("name", this.info.name);
    formData.append("password", this.info.password);
    formData.append("nid", this.info.nid);
    formData.append("photo", this.info.photo);
    formData.append("type", "delivery");
    formData.append("phoneNumber", this.info.address);

    this.Auth.updateMe(formData)
      .then(resp => {
        this.toastr.success('Update info successful');
        this.router.navigate(['/profile']);
      })
      .catch(err => {
        
      });
  }

  onSelect(event, type) {
		//console.log(event);
    
		this.files.push(...event.addedFiles);
    this.info.nid = event.addedFiles[0];
	}

	onRemove(event, type) {
		//console.log(event);
		
		this.files.splice(this.files.indexOf(event), 1);
    this.info.nid = null;
	}

  handleProfilePic(event) {
    if(event.target.files)
    {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload=(event:any)=>{
        this.userImage = event.target.result;
      }
    }
    
    this.picture.push(event.target.files[0]);
    this.info.photo = event.target.files[0];
}

}
