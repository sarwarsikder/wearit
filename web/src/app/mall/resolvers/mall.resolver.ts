import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { MallService } from '../services/mall.service';

@Injectable()
export class MallResolver implements Resolve<Observable<any>> {
  constructor(private service: MallService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.service.findOne(route.params.alias)
      .then(resp => resp.data);
  }
}
