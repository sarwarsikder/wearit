import { Component, OnInit, Input } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { MallService } from '../../services/mall.service';
import { ActivatedRoute, Params } from '@angular/router';
import { UtilService } from '../../../shared/services';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

@Component({
  selector: 'search-shops',
  templateUrl: './search.html'
})
export class SearchComponent implements OnInit {
  keyword = 'title';
  public malls = [];
  public shops: any = [];
  public page: Number = 1;
  public itemsPerPage: Number = 12;
  public searchFields: any = {
    q: '',
    featured: ''
  };
  public mallFilterSelected: any = {
    mall: ''
  };
  public total: any = 0;
  public countries: any = [];
  public states: any = [];
  public cities: any = [];
  public distance: any = '';
  public map: any = {
    distance: '',
    latitude: '',
    longitude: ''
  };
  public isLoading = false;

  constructor(private route: ActivatedRoute, private translate: TranslateService,
     private toasty: ToastyService, private mallService: MallService,
    private utilService: UtilService) {
    this.route.queryParamMap.subscribe((params: Params) => {
      this.searchFields = Object.assign(this.searchFields, params.params);
      this.query();
    });
  }

  ngOnInit() {
    this.mallService.getMall().then(mall => {
      
      this.malls = mall.items;
      
    });
    // this.location.countries().then(resp => this.countries = resp.data);
  }

  selectEvent(item) {
    //this.searchFields.mallId = item._id;
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
    console.log(search);
  }

  onFocused(e) {
    
  }

  query() {
    this.utilService.setLoading(true);
    this.isLoading = true;
    if(this.mallFilterSelected.mall != '')
    {
      this.searchFields.mallId = this.mallFilterSelected.mall._id;
    }
    else
    {
      delete this.searchFields["mallId"];
    }
    const params = Object.assign({
      page: this.page,
      take: this.itemsPerPage
    }, this.searchFields);

    if (this.map.distance && this.map.distance <= 0 && this.map.latitude && this.map.longitude) {
      return this.toasty.error('Wrong distance number please try again.');
    } else if (this.map.distance && this.map.latitude && this.map.longitude) {
      params.latitude = this.map.latitude;
      params.longitude = this.map.longitude;
      params.distance = this.map.distance;
    }

    this.mallService.search(params).then((res) => {
      this.shops = res.data.items;
      this.total = res.data.count;
      this.utilService.setLoading(false);
      this.isLoading = false;
    })
      .catch(() => {
        this.toasty.error(this.translate.instant('Something went wrong, please try again!'));
        this.utilService.setLoading(false);
        this.isLoading = false;
      });
  }

  trackLocation() {
    const that = this;
    const res = function success(pos) {
      if (pos && pos.coords && pos.coords.latitude && pos.coords.longitude) {
        that.map.latitude = pos.coords.latitude;
        that.map.longitude = pos.coords.longitude;
        that.query();
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(res);
    } else {
      this.toasty.error('Geolocation is not supported by this browser.');
    }

  }

  keyPress(event: any) {
    if (event.charCode === 13) {
      this.query();
    }
  }

}
