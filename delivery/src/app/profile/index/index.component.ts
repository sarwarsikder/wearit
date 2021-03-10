import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  userImage = "assets/images/user.png"
  imageAlt = "userImage"

  constructor() { }

  ngOnInit(): void {
  }

}
