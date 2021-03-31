import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { Observable, of } from 'rxjs';
import * as _ from 'lodash';
import { debounceTime, distinctUntilChanged, map, tap, switchMap } from 'rxjs/operators';
import { ProductService } from '../../../product/services/product.service';

@Component({
  selector: 'order-view',
  templateUrl: './view.html'
})
export class ViewComponent implements OnInit {
  public order: any = {};
  public details: any = [];
  public courier: any;
  public searching: any = false;
  public searchFailed: any = false;
  public fileOptions: any = {};


  constructor(private router: Router, private route: ActivatedRoute,
    private orderService: OrderService, private toasty: ToastyService) {
    const id = this.route.snapshot.params.id;
    this.orderService.findOne(id).then((res) => {
      this.order = res.data;
      this.details = res.data.details;

      if(!this.order.courierId){
        this.order.courierId = '';
      }
    });
  }

  ngOnInit() {
  }

   // search seller
   formatter = (x: {
    name: string,
  }) => {
    if (x.name) {
      x.name ;
      console.log( x);
      console.log( x.name);
      this.order.courier= x;
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

  updateStatus(item, index) {
    const data = _.pick(item, ['status']);

    this.orderService.update(item._id, data).then(resp => {
      this.toasty.success('Updated successfuly!');
      this.details[index].status = item.status;
    }).catch((err) => this.toasty.error('Something went wrong, please try again!'));
  }

  addDelivery() {
    if (!this.courier) {
      return this.toasty.error('Please enter delivery / courier name');
    }

    if(this.courier){
      console.log(this.courier);
      this.order.courierId = this.courier._id;
      console.log(this.courier._id);
    }

    this.orderService.update_delivery(this.order._id, this.order).then(resp => {
      this.toasty.success('Updated successfuly!');
    }).catch((err) => this.toasty.error('Something went wrong, please try again!'));
  }
}
