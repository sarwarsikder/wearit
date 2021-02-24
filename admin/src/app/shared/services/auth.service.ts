import { Injectable } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public accessToken: string = null;
  public currentUser = null;

  constructor(private restangular: Restangular) { }

  getCurrentUser() {
    if (this.currentUser) {
      return new Promise(resolve => resolve(this.currentUser));
    }

    return this.restangular.one('users', 'me').get().toPromise()
      .then((resp) => {
        this.currentUser = resp.data;

        return resp.data;
      });
  }

  login(credentials: any): Promise<any> {
    return this.restangular.all('auth/login').post(credentials).toPromise()
    .then((resp) => {
      localStorage.setItem('accessToken', resp.data.token);
      return this.restangular.one('users', 'me').get().toPromise()
        .then(resp => {
          if (resp.data.role !== 'admin') {
            this.removeToken();
            throw 'Invalid role!';
          }
          console.log("TESTING");

          this.currentUser = resp.data;
          localStorage.setItem('isLoggedin', 'yes');
          return resp.data;
        });
    });
  }

  getAccessToken(): any {
    if (!this.accessToken) {
      this.accessToken = localStorage.getItem('accessToken');
    }

    return this.accessToken;
  }

  forgot(email: string): Promise<any> {
    return this.restangular.all('auth/forgot').post({ email }).toPromise();
  }

  removeToken() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('isLoggedin');
  }

  isLoggedin() {
    return localStorage.getItem('isLoggedin') === 'yes';
  }
}
