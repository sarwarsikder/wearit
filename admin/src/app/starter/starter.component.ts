import { Component, OnInit } from '@angular/core';
import { StatService } from '../shared/services';
import { RequestPayoutService } from '../request-payout/request-payout.service';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, Color, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';



@Component({
  templateUrl: './starter.component.html'
})
export class StarterComponent implements OnInit {

  public shopStat: any = {};
  public userStat: any = {};
  public productStat: any = {};
  public orderStat: any = {};
  public requestPayout = [];

  /**
   * PieChart 
   */
  public pieShopChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieShopChartLabels: Label[] = [];
  public pieShopChartData: SingleDataSet = [];
  public pieShopChartType: ChartType = 'pie';
  public pieShopChartLegend = true;
  public pieShopChartPlugins = [];
  public pieShopChartColors: Array < any > = [];


  public pieUserChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieUserChartLabels: Label[] = [];
  public pieUserChartData: SingleDataSet = [];
  public pieUserChartType: ChartType = 'pie';
  public pieUserChartLegend = true;
  public pieUserChartPlugins = [];
  public pieUserChartColors: Array < any > = [];

  public pieOrderChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieOrderChartLabels: Label[] = [];
  public pieOrderChartData: SingleDataSet = [];
  public pieOrderChartType: ChartType = 'pie';
  public pieOrderChartLegend = true;
  public pieOrderChartPlugins = [];
  public pieOrderChartColors: Array < any > = [];



  /**
   * LineChart 
   */
public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];


  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  

  constructor(private statService: StatService, private payoutService: RequestPayoutService) { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
    this.statService.shopStat().then(res => {
      this.shopStat = res.data;
      console.log(this.shopStat);
      this.pieShopChartData = [
        this.shopStat.all,
        this.shopStat.featured,
        this.shopStat.activated,
        this.shopStat.deactivated,
        this.shopStat.verified,
        this.shopStat.unverified,
      ];
      this.pieShopChartLabels = [
        ['Total', 'Shop'], 
        ['Feature', 'Shop',], 
        ['Actived Shop'],
        ['Inactived Shop'],
        ['Verified Shop'],
        ['Unverified Shop']];

         this.pieShopChartColors = [{
    
          backgroundColor: 
          ['rgba(30, 169, 224, 0.8)',
          'rgba(255,165,0,0.9)',
          'rgba(139, 136, 136, 0.9)',
          'rgba(255, 161, 181, 0.9)',
          'rgba(255, 102, 0, 0.9)',
          'rgba(255, 135, 0, 0.9)'
          ]
     }];
    });
    this.statService.userStat().then(res => {
      this.userStat = res.data;

      this.pieUserChartData = [
        this.userStat.all,
        this.userStat.activated,
        this.userStat.deactivated,
      ];
      this.pieUserChartLabels = [
        ['Total', 'User'], 
        ['Actived User'],
        ['Inactived User']
      ];

         this.pieUserChartColors = [{
          backgroundColor:
          ['rgba(69, 195, 114, 1)',
          'rgba(255,165,0,0.9)',
          'rgba(255, 161, 181, 0.9)',
          ]
     }];
    });
    this.statService.prodStat().then(res => {
      this.productStat = res.data;
    });
    this.statService.orderStat().then(res => {
      this.orderStat = res.data;

      this.pieOrderChartData = [
        this.orderStat.totalParentOrder,
        this.orderStat.all,
        this.orderStat.completed,
        this.orderStat.shipping,
        this.orderStat.progressing,
        this.orderStat.pending,
        this.orderStat.refunded,
        this.orderStat.cancelled,
      ];
      this.pieOrderChartLabels = [
        ['Total Order'], 
        ['Total Sub Order'], 
        ['Completed Order',], 
        ['Shipping Order'],
        ['Progressing Order'],
        ['Pending Order'],
        ['Refunded Order'],
        ['Cancelled Order'],
      ];

         this.pieOrderChartColors = [{
    
          backgroundColor: 
          ['rgba(30, 169, 224, 0.8)',
          'rgba(255,165,0,0.9)',
          'rgba(139, 136, 136, 0.9)',
          'rgba(255, 161, 181, 0.9)',
          'rgba(255, 102, 0, 0.9)',
          'rgba(255, 135, 0, 0.9)',
          'rgba(255, 135, 0, 0.9)',
          'rgba(255, 135, 0, 0.9)'
          ]
     }];

    });

    this.payoutService.search({
      take: 5
    })
      .then(resp => {
        this.requestPayout = resp.data.items;
      });
  }
}
