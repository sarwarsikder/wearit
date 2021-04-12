import {Component, OnInit} from '@angular/core';
import {ShopService} from '../shop/shop.service';
import {ToastyService} from 'ng2-toasty';
import * as _ from 'lodash';

import {MessageService} from '../message/services/message.service';
import {StatService} from '../shared/services';
import {ChartType, ChartOptions, ChartDataSets} from 'chart.js';
import {SingleDataSet, Label, Color, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip} from 'ng2-charts';


@Component({
    templateUrl: './starter.component.html'
})
export class StarterComponent implements OnInit {

    public shop: any = {};
    public latestMessages: any = [];
    public orderStat: any = {};
    public productStat: any = {};
    public saleStat: any = {};


    public pieChartOptions: ChartOptions = {
        responsive: true,
    };
    // public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
    // public pieChartLabels: Label[] = ['Completed', 'Shipping', 'Pending', 'Progressing', 'Refunded', 'Cancelled'];
    public pieChartLabels: Label[] = [];
    public pieChartData: SingleDataSet = [];
    public pieChartType: ChartType = 'pie';
    public pieChartLegend = true;
    public pieChartPlugins = [];
    public pieChartColors: Array<any> = [];

    public lineChartData: ChartDataSets[] = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
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


    constructor(private shopService: ShopService, private statService: StatService, private toasty: ToastyService,
                private messageService: MessageService) {
        monkeyPatchChartJsTooltip();
        monkeyPatchChartJsLegend();
    }

    ngOnInit() {
        this.statQuery();

        this.shopService.me().then((res) => {
            this.shop = res.data;
        })
            .catch(() => this.toasty.error('Something went wrong, please try again!'));

        this.messageService.latest({
            take: 4
        }).then(resp => this.latestMessages = resp.data.items);
    }

    statQuery() {
        this.statService.orderStat().then(resp => {
            this.orderStat = resp.data;
            this.pieChartData = [this.orderStat.completed, this.orderStat.shipping, this.orderStat.pending, this.orderStat.progressing,
                this.orderStat.refunded, this.orderStat.cancelled];
            this.pieChartLabels = ['Completed', 'Shipping', 'Pending', 'Progressing', 'Refunded', 'Cancelled'];
            this.pieChartColors = [{
                backgroundColor:
                    ['rgba(0, 102, 0, 0.8)',
                        'rgba(30,169,224,0.9)',
                        'rgba(139, 136, 136, 0.9)',
                        'rgba(255, 161, 181, 0.9)',
                        'rgba(255, 135, 0, 0.9)',
                        'rgba(255, 0, 0, 0.9)'
                    ]
            }];


        })
            .catch(() => this.toasty.error('Something went wrong, please try again!'));

        this.statService.prodStat().then(resp => {
            this.productStat = resp.data;
        })
            .catch(() => this.toasty.error('Something went wrong, please try again!'));

        this.statService.saleStat().then(resp => {
            this.saleStat = resp.data;
        })
            .catch(() => this.toasty.error('Something went wrong, please try again!'));
    }
}
