import { Injectable } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  
  public menuList = [
    {name:'Users', value:'users'},
    {name:'Shops', value:'shops'},
    {name:'Products',value:'products'},
    {name:'Orders',value:'orders'},
    {name:'Banners',value:'banners'},
    {name:'Malls',value:'malls'},
    {name:'Offers',value:'offers'},
    {name:'Posts',value:'posts'},
    {name:'Newsletter',value:'newsletter'},
    {name:'Complaints',value:'complaints'},
    {name:'Faqs',value:'faqs'},
    {name:'Request Payout',value:'requestPayout'},
    {name:'Report',value:'report'},
    {name:'Configs',value:'configs'}
  ];

  public menuValue = ['users','shops','products','orders','banners','malls','offers','posts','newsletter','complaints','faqs','requestPayout','report','configs'];
  
  
  constructor(private restangular: Restangular) { }

  create(credentials: any): Promise<any> {
    return this.restangular.all('users').post(credentials).toPromise();
  }

  search(params: any): Promise<any> {
    return this.restangular.one('users', 'search').get(params).toPromise();
  }

  me(): Promise<any> {
    return this.restangular.one('users', 'me').get().toPromise();
  }

  updateMe(data): Promise<any> {
    return this.restangular.all('users').customPUT(data).toPromise();
  }

  findOne(id): Promise<any> {
    return this.restangular.one('users', id).get().toPromise();
  }

  update(id,data): Promise<any> {
    return this.restangular.one('users', id).customPUT(data).toPromise();
  }

  delete(id): Promise<any> {
    return this.restangular.one('users', id).customDELETE().toPromise();
  }

  findGroups(params: any): Promise<any> {
    return this.restangular.one('users/groups/search').get(params).toPromise();
  }

  createGroup(data: any): Promise<any> {
    return this.restangular.all('users/groups').post(data).toPromise();
  }

  findGroup(id: string): Promise<any> {
    return this.restangular.one('users/groups', id).get().toPromise();
  }

  updateGroup(id: string, data: any): Promise<any> {
    return this.restangular.one('users/groups', id).customPUT(data).toPromise();
  }

  removeGroup(id: string): Promise<any> {
    return this.restangular.one('users/groups', id).customDELETE().toPromise();
  }
}
