import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  // private countLoaded = new Subject<any>();
  // public countLoaded$ = this.countLoaded.asObservable();
  constructor(private restangular: Restangular) { }
  
  getCountStatus(): Promise<any> {
    return this.restangular.one("orders/"+'count/').get().toPromise();
  }
  getAll(status, page): Promise<any> {
    return this.restangular.one("orders/"+'details/status/'+status+'/'+page+'/10').get().toPromise();
  }
  changeStatus(orderId, status): Promise<any> {
    const payload = {
      status: status
    }
    return this.restangular.one("delivery/"+'orders/'+orderId).customPUT(payload).toPromise();
  }
}
