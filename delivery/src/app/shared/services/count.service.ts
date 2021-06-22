import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  private countLoaded = new Subject<any>();
  public countLoaded$ = this.countLoaded.asObservable();

  constructor(private restangular: Restangular) { }
  
  getCountStatus(): Promise<any> {
    return this.restangular.one('orders/count/').get().toPromise();
  }

}
