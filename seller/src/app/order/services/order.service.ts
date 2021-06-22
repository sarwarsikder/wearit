import { Injectable } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/add/operator/toPromise';
import * as _ from 'lodash';

@Injectable()
export class OrderService {

  private allowFields = [
    'courierId'
  ];

  constructor(private restangular: Restangular) { }

  find(params: any): Promise<any> {
    return this.restangular.one('orders', 'shops').get(params).toPromise();
  }

  findOne(id): Promise<any> {
    return this.restangular.one('orders/details', id).get().toPromise();
  }

  updateStatus(id, data): Promise<any> {
    return this.restangular.one('orders').one('details', id).one('status').customPUT(data).toPromise();
  }

  updateShipping(id, data): Promise<any> {
    return this.restangular.one('orders').one('details', id).one('shipping').customPUT(data).toPromise();
  }


  update_delivery(id, data): Promise<any> {
    return this.restangular.one('orders').one('details', id).customPUT(_.pick(data, this.allowFields)).toPromise();
  }

  findDelivery(params: any): Promise<any> {
    return this.restangular.one('users', 'search').get(params).toPromise();
  }

  export(params: any): Promise<any> {
    return this.restangular.one('orders/shops/export/csv').get(params).toPromise();
  }
}
