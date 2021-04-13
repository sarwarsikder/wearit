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
  userImage = "assets/images/avatar.png"
  userNid = "assets/images/avatar.png"
  imageAlt = "userImage"
  nidAlt = "userNid"

  private Auth: AuthService;
  public info: any = {};
  public submitted: boolean = false;

  constructor( public router: Router, auth: AuthService ,private toastr: ToastrService) {
    this.Auth = auth;
    if (this.Auth.isLoggedin()) {
      this.Auth.me().then((resp) => {
        this.info = resp.data;
        this.info.password = '';
        var {avatarUrl} = this.info;
        if(avatarUrl){
          if(!avatarUrl.includes('http')){
            avatarUrl = this.userImage;
          }
        }
        this.userImage = avatarUrl;
        this.userNid = this.info.nid;
        // if(this.info.nid.length > 0)
        // {
        //   this.get_file(this.info.nid);
        // }

        this.info.nid = null;
        this.info.photo = null;
      });


    }
   }


  ngOnInit(): void {

  }

  files: File[] = [];
  picture: File[] = [];

  // private async get_file(url)
  //  {
  //     let response = await fetch(url);
  //     let data = await response.blob();
  //     let name = url.split("/");
  //     name = name[name.length-1];
  //     let file = new File([data], name);
  //     this.files.push(file);
  //  }

  public submit(frm: any) {
    this.submitted = true;

    if (frm.invalid) {
      return;
    }

    var formData = new FormData();

    formData.append("name", this.info.name);
    formData.append("email", this.info.email);
    formData.append("address", this.info.address);
    formData.append("phoneNumber", this.info.phoneNumber);
    formData.append("password", this.info.password);
    if(this.info.nid != null)
    {
      formData.append("nid", this.info.nid);
    }
    if(this.info.photo != null)
    {
      formData.append("photo", this.info.photo);
    }
    formData.append("type", "delivery");

    this.Auth.updateMe(formData)
      .then(resp => {
        this.toastr.success('Update info successful');
        this.router.navigate(['/profile']);
      })
      .catch(err => {

      });
  }

  // onSelect(event, type) {
	// 	//console.log(event);

	// 	this.files.push(...event.addedFiles);
  //   this.info.nid = event.addedFiles[0];
	// }

	// onRemove(event, type) {
	// 	//console.log(event);

	// 	this.files.splice(this.files.indexOf(event), 1);
  //   this.info.nid = null;
	// }

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

handleNid(event) {
  if(event.target.files)
  {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload=(event:any)=>{
      this.userNid = event.target.result;
    }
  }

  this.files.push(event.target.files[0]);
  this.info.nid = event.target.files[0];
}

}
