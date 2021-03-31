import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, OrderService } from '../../shared/services';

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
    this.orderService.getCountStatus().then(data=>{
      this.count = data.data;
    });
    this.orderService.getAll(this.status, this.pageNo).then(data=>{
      this.orders = data.data.orders;
      this.totalCount = data.data.totalCount;
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
}
