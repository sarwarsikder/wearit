import { Component, OnInit, Input } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { ShopService } from '../../shop.service';
import { AuthService } from '../../../shared/services';
import * as _ from 'lodash';

@Component({
  selector: 'shop-basic-info',
  templateUrl: './shop-basic-info.html'
})
export class ShopBasicInfoComponent implements OnInit {
  @Input() shop: any;
  public isSubmitted = false;
  keyword = 'title';
  public malls = [];
  public mallFilterSelected: any = {
    mall: ''
  };

  selectEvent(item) {
    //this.shop.mallId = item._id;
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    
  }

  constructor(private auth: AuthService, private toasty: ToastyService, private shopService: ShopService) { }

  ngOnInit() { 
    
    this.auth.getMall().then(mall => {
      
      this.malls = mall.items;
      
      if(this.shop["mallInfo"] != undefined)
      {
        this.mallFilterSelected.mall = this.shop.mallInfo;
      }
      
    });
  }
  submit(frm: any) {
    if(this.mallFilterSelected.mall != '')
    {
      this.shop.mallId = this.mallFilterSelected.mall._id;
    }
    else
    {
      this.shop.mallId = '56cb91bdc3464f14678934ca';//dummy
    }
    this.isSubmitted = true;
    if (!frm.valid) {
      return this.toasty.error('Something went wrong, please check and try again!');
    }
    const data = _.pick(this.shop, ['name', 'alias', 'address', 'city', 'state', 'country', 'zipcode', 'email',
      'phoneNumber', 'logoId', 'verificationIssueId', 'bannerId', 'mallId', 'headerText', 'gaCode', 'announcement', 'returnAddress']);

    this.shopService.update(this.shop.id, data).then(resp => {
      this.toasty.success('Updated successfuly!');
    }).catch((err) =>
      this.toasty.error(err.data.data.message || err.data.data.details[0].message)
    );
  }
  selectLogo(data: any) {
    this.shop.logoId = data._id;
    this.shop.logo = data;
  }
  selectVerificationIssue(data: any) {
    this.shop.verificationIssueId = data._id;
    this.shop.verificationIssue = data;
  }
  selectBanner(data: any) {
    this.shop.bannerId = data._id;
    this.shop.banner = data;
  }
}
