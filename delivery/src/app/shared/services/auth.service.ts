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
        localStorage.setItem('accessToken', resp.data.token);
        return this.restangular.one('users', 'me').get().toPromise()
          .then(resp => {
            this.currentUser = resp.data;
            localStorage.setItem('isLoggedin', 'yes');
            this.userLoaded.next(resp.data);
            return resp.data;
          });
      });
  }
}
