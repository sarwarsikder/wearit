import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  userImage = "assets/images/avatar.png"
  imageAlt = "userImage"

  public info: any = {};

  private Auth: AuthService;
  constructor(private router: Router, auth: AuthService) {
    this.Auth = auth;
    if (this.Auth.isLoggedin()) {
      this.Auth.me().then((resp) => {
        this.info = resp.data;
        var {avatarUrl} = this.info;
        if(avatarUrl){
          if(!avatarUrl.includes('http')){
            avatarUrl = this.userImage;
          }
        }
        this.userImage = avatarUrl;
      });
    }
   }

  ngOnInit(): void {

  }

}
