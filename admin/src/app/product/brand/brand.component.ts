import { Component, OnInit } from '@angular/core';
import { BrandService } from '../services/brand.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import * as _ from 'lodash';

@Component({
  selector: 'app-brand',
  templateUrl: './brands.html',
})
export class BrandComponent implements OnInit {
  public items = [];
  public page: any = 1;
  public total: any = 0;
  public searchText: any = '';
  public sortOption = {
    sortBy: 'createdAt',
    sortType: 'desc'
  };
  constructor(private router: Router, private drandService: BrandService, private toasty: ToastyService) { }

  ngOnInit() {
    this.query();
  }

  query() {
    this.drandService.search({
      page: this.page,
      q: this.searchText,
      sort: `${this.sortOption.sortBy}`,
      sortType: `${this.sortOption.sortType}`
    })
      .then(resp => {
        this.items = resp.data.items;
        this.total = resp.data.count;
        this.searchText = '';
      })
      .catch(() => this.toasty.error('Something went wrong, please try again!'));
  }

  remove(item: any, index: number) {
    if (window.confirm('Are you sure want to delete this category?')) {
      this.drandService.remove(item._id)
        .then(() => {
          this.toasty.success('Category has been deleted!');
          this.items.splice(index, 1);
        })
        .catch((err) => this.toasty.error(err.data.message || 'Something went wrong, please try again!'));
    }
  }

}
