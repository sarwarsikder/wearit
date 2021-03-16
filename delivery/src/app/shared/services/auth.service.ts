import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private accessToken: string = null;
  private currentUser = null;
  private userLoaded = new Subject<any>();
  public userLoaded$ = this.userLoaded.asObservable();

  // ensure do not load if it is in the promise
  // because many component use get current user function
  private _getUser: any;

  constructor(private restangular: Restangular) { }

  login(credentials: any): Promise<any> {
    return this.restangular.all('auth/login').post(credentials).toPromise()
      .then((resp) => {
        
        if(resp.code == 400)
        {
            return resp;
        }
        else
        {
          localStorage.setItem('accessToken', resp.data.token);
          return this.restangular.one('users', 'me').get().toPromise()
            .then(resp => {
              this.currentUser = resp.data;
              localStorage.setItem('isLoggedin', 'yes');
              this.userLoaded.next(resp.data);
              return resp.data;
            });
        }
      });
  }

  register(info: any): Promise<any> {
    return this.restangular.all('auth/register').post(info).toPromise();
  }

  me(): Promise<any> {
    return this.restangular.one('users', 'me').get().toPromise();
  }

  updateMe(data): Promise<any> {
    return this.restangular.all('users').customPUT(data).toPromise().then(resp => {
      this.currentUser = resp.data;
      this.userLoaded.next(resp.data);
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
