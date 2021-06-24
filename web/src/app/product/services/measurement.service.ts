import { Injectable } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  constructor(private restangular: Restangular) { }

  findOne(id): Promise<any> {
    return this.restangular.one('measurement', id).get().toPromise();
  }
}
