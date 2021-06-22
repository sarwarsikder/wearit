import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, OrderService } from '../../shared/services';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  private Auth: AuthService;
  private orderService: OrderService;
  public count: any;
  public orders : any[];
  public status : string;
  public pageNo : number;
  public totalCount : number;

  constructor(public router: Router, auth: AuthService, orderService: OrderService) {
    this.Auth = auth;
    this.orders = [];
    this.orderService = orderService;
    this.status = "progressing"
    this.pageNo = 1;
    this.totalCount = 0;
   }

  ngOnInit(): void {

    let countStatus = this.orderService.getCountStatus();
    let allOrders = this.orderService.getAll(this.status, this.pageNo);

    forkJoin([countStatus, allOrders]).subscribe(results => {
      this.count = results[0].data;
      this.orders = results[1].data.orders;
      this.totalCount = results[1].data.totalCount;
    });
  }
  onPageChange(event){
    this.pageNo = event;
    this.orderService.getAll(this.status, this.pageNo).then(data=>{
      this.orders = data.data.orders;
      this.totalCount = data.data.totalCount;
    });
  }
  onStatusChange(event){
    this.status = event;
    this.pageNo = 1;
    this.totalCount = 0;
    this.onPageChange(this.pageNo);
  }
  onStatusSet(orderId, event){
    this.orderService.changeStatus(orderId,event).then(data=>{
      this.orders = this.orders.filter(item=>item._id !=orderId );
      this.count[event] = this.count[event]+1;
      this.count[this.status] = this.count[this.status]-1;
    });
  }
  getFormattedDateTime(dateTime: string): string {
    let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    let date = new Date(dateTime);
    let formattedDateTime;
    let hour = date.getHours();
    let min = date.getMinutes();
    if (min < 10) {
      formattedDateTime = `${hour}:0${min}`;
    } else {
      formattedDateTime = `${hour}:${min}`;
    }

    formattedDateTime = formattedDateTime
      + ' ' + String(date.getDate()).padStart(2, '0')
      + '.' + monthNames[date.getMonth()]
      + '.' + date.getFullYear();
    return formattedDateTime;
  }

}
