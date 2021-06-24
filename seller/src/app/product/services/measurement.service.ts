import { Injectable } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  constructor(private restangular: Restangular) { }

  getAll(): Promise<any> {
    return this.restangular.one('measurement').get().toPromise()
  }
}
