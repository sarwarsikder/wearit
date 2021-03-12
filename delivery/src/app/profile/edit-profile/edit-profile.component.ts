import { Component, OnInit } from '@angular/core';
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

  constructor( auth: AuthService) {
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

  onSelect(event, type) {
		//console.log(event);
    
		this.files.push(...event.addedFiles);
	}

	onRemove(event, type) {
		//console.log(event);
		
		this.files.splice(this.files.indexOf(event), 1);
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
}

}
