import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  private Auth: AuthService;
  constructor(public router: Router, auth: AuthService) {
    this.Auth = auth;
   }

  ngOnInit(): void {
    if (!this.Auth.isLoggedin()) {
      this.router.navigate(['/auth/sign-in']);
    }
  }

}
