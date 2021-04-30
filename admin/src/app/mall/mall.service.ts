import { Injectable } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/add/operator/toPromise';
import * as _ from 'lodash';

@Injectable()
export class MallService {
  private allowFields = [
    'title', 'description', 'mediaId', 'address'
  ];
  constructor(private restangular: Restangular) { }

  create(data: any): Promise<any> {
    return this.restangular.all('malls').post(_.pick(data, this.allowFields)).toPromise();
  }

  search(params: any): Promise<any> {
    return this.restangular.one('malls').get(params).toPromise();
  }

  findOne(id): Promise<any> {
    return this.restangular.one('malls', id).get().toPromise();
  }

  update(id,data): Promise<any> {
    return this.restangular.one('malls', id).customPUT(_.pick(data, this.allowFields)).toPromise();
  }

  remove(id): Promise<any> {
    return this.restangular.one('malls', id).customDELETE().toPromise();
  }
}
