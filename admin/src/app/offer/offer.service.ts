import { Injectable } from '@angular/core';
import _ = require('lodash');
import { Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private allowFields = [
    'title', 'content', 'mediaId', 'link'
  ];
  constructor(private restangular: Restangular) { }

  create(data: any): Promise<any> {
    return this.restangular.all('offers').post(_.pick(data, this.allowFields)).toPromise();
  }

  search(params: any): Promise<any> {
    return this.restangular.one('offers').get(params).toPromise();
  }

  findOne(id): Promise<any> {
    return this.restangular.one('offers', id).get().toPromise();
  }

  update(id,data): Promise<any> {
    return this.restangular.one('offers', id).customPUT(_.pick(data, this.allowFields)).toPromise();
  }

  remove(id): Promise<any> {
    return this.restangular.one('offers', id).customDELETE().toPromise();
  }
}
