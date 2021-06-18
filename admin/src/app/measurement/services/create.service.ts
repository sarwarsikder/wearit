import { Injectable } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private restangular: Restangular) { }

  create(data: any): Promise<any> {
    return this.restangular.all('measurement').post(data).toPromise();
  }
}
