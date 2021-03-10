import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  userImage = "assets/images/user.png"
  imageAlt = "userImage"

  constructor() { }

  ngOnInit(): void {
  }

}
