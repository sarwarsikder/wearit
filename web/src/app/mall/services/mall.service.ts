import { Injectable } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/add/operator/toPromise';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class MallService {
  constructor(private restangular: Restangular) { }

  findOne(id: string): Promise<any> {
    return this.restangular.one('malls', id).get().toPromise();
  }

  getMall() {
    return this.restangular.one('malls').get().toPromise()
      .then((resp) => {
        return resp.data;
      });
  }

  search(params: any): Promise<any> {
    return this.restangular.one('malls', 'search').get(params).toPromise();
  }
}
