import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import * as _ from 'lodash';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, tap, switchMap } from 'rxjs/operators';


@Component({
  selector: 'view',
  templateUrl: './view.html'
})
export class ViewComponent implements OnInit {

  public isSubmitted: boolean = false;
  public order: any = {};
  public courier: any;
  public avatarUrl: any;
  public searching: any = false;
  public searchFailed: any = false;


  constructor(private router: Router, private route: ActivatedRoute,
    private orderService: OrderService, private toasty: ToastyService) {
    const id = this.route.snapshot.params.id;
    this.orderService.findOne(id).then((res) => {
      this.order = res.data;
      this.avatarUrl = res.data.productDetails.mainImage ? res.data.productDetails.mainImage.mediumUrl : '/assets/images/background/user-info.jpg';
      //console.log(this.order)
    })
  }

  ngOnInit() {
  }

  // search seller
  formatter = (x: {
    name: string,
  }) => {
    if (x.name) {
      x.name;
      console.log(x);
      console.log(x.name);
      this.order.courier = x;
    }
  }
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.orderService.findDelivery({ name: term }).then((res) => {
          if (res) {
            this.searchFailed = false;
            this.searching = false;
            return res.data.items;
          }
          this.searchFailed = true;
          this.searching = false;
          return of([]);
        })
      )
    )


  submit(frm: any) {
    this.isSubmitted = true;
    if (!frm.valid) {
      return this.toasty.error('Something went wrong, please check and try again!');
    }
    const data = _.pick(this.order, ['shippingMethod', 'shippingCode']);

    this.orderService.updateShipping(this.order._id, data).then(resp => {
      this.toasty.success('Updated shipping type successfuly!');
    }).catch((err) =>
      this.toasty.error('Something went wrong, please try again!'));
  }

  query() {
    const data = _.pick(this.order, ['status']);
    this.orderService.updateStatus(this.order._id, data).then(resp => {
      this.toasty.success('Updated status successfuly!');
    }).catch((err) => this.toasty.error('Something went wrong, please try again!'));
  }

}
