import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  private wishListChanged = new Subject<any>();
  private wishList: any = [];
  public wishListChanged$ = this.wishListChanged.asObservable();

  constructor() {
    // TODO - load cart from local storage
    const cartData = localStorage.getItem('wish_list');
    this.wishList = cartData ? JSON.parse(cartData) : [];
    this.wishListChanged.next(this.wishList);
  }

  get() {
    return this.wishList;
  }

  add(data: any) {
    // TODO - not duplicate for existing product
    this.wishList.unshift({
      productId: data.productId
    });
    localStorage.setItem('wish_list', JSON.stringify(this.wishList));
    this.wishListChanged.next(this.wishList);
  }

  remove(product: any) {
    const index = _.findIndex(this.wishList, (c: any) => c.productId === product.productId);
    console.log(index);
    if (index > -1) {
      this.wishList.splice(index, 1);
    }

    console.log("TEST");
    console.log( product.productId);

    localStorage.setItem('wish_list', JSON.stringify(this.wishList));
    this.wishListChanged.next(this.wishList);
  }

  clean() {
    this.wishList = [];
    localStorage.setItem('wish_list', JSON.stringify([]));
    this.wishListChanged.next([]);
  }

}
