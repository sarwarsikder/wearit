import { Injectable } from '@angular/core';
import {Restangular} from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private rest: Restangular) { }

  search(params: any): Promise<any> {
    return this.rest.all('questions').customGET('', params).toPromise();
  }
}
