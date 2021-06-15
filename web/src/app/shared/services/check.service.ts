import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root',
})

export class CheckService {
  private accessToken: string = null;
  private currentUser = null;
  private userLoaded = new Subject<any>();
  public userLoaded$ = this.userLoaded.asObservable();

    // constructor(public router: Router) { }

    checkEmailandPhone(email, phone){
        if (email == null || email == '' || email == undefined || phone == null || phone == '' || phone == undefined){
          return false
        }
        else {
          return true
        }
       }

 } 