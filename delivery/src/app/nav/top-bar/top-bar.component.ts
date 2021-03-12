import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  private Auth: AuthService;
  constructor(private router: Router, auth: AuthService) {
    this.Auth = auth;
   }

  ngOnInit(): void {
  }

  logout() {
    this.Auth.removeToken();
    this.router.navigate(['/auth/sign-in']);
  }

}
