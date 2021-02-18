import { Injectable } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/add/operator/toPromise';
import * as _ from 'lodash';



@Injectable()
export class BrandService {
  private allowFields = [
    'name', 'alias', 'description', 'totalProduct', 'meta', 'ordering',
    'logo'
  ];
  constructor(private restangular: Restangular) { }

  create(data: any): Promise<any> {
    return this.restangular.all('brands').post(_.pick(data, this.allowFields)).toPromise();
  }

  search(params: any): Promise<any> {
    return this.restangular.one('brands').get(params).toPromise();
  }

  tree(): Promise<any> {
    return this.restangular.one('brands').get().toPromise();
  }

  findOne(id): Promise<any> {
    return this.restangular.one('brands', id).get().toPromise();
  }

  update(id,data): Promise<any> {
    return this.restangular.one('brands', id).customPUT(_.pick(data, this.allowFields)).toPromise();
  }

  remove(id): Promise<any> {
    return this.restangular.one('brands', id).customDELETE().toPromise();
  }

}

