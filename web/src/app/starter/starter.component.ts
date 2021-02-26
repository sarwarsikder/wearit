import { UtilService } from './../shared/services/utils.service';
import { Component, OnInit } from '@angular/core';
import { SeoService } from '../shared/services';
import { ShopService } from '../shop/services/shop.service';
import { SystemService } from '../shared/services';
import { CategoryService } from '../product/services';

declare var $: any;

@Component({
  templateUrl: './starter.component.html'
})
export class StarterComponent implements OnInit {
  public shops: any = [];
  public siteName: String = '';
  public sellerUrl: String = '';
  public appConfig: any = {};
  public category: any = [];

  constructor(private seoService: SeoService, private util: UtilService,private categoryService: CategoryService,
    private shopService: ShopService, private systemService: SystemService) {

    this.sellerUrl = window.appConfig.sellerUrl;
    this.systemService.configs().then(resp => {
      if (resp) {
        this.appConfig = resp;
        this.siteName = resp.siteName;
        this.seoService.update(resp.siteName, resp.homeSEO, resp.siteLogo);
      }
    });
  }

  ngOnInit() {

    this.categoryService.tree()
    .then(resp => {
      this.category = resp;
    });

    console.log("Category");
      console.log(this.category);
      console.log("Category One");

   

    this.util.setLoading(true);
    this.shopService.search({
      take: 4,
      featured: 1
    })
      .then(resp => {
        this.util.setLoading(false);
        this.shops = resp.data.items;
      }).catch(() => this.util.setLoading(false));
  }
}
