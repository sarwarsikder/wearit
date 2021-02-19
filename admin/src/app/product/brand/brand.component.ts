import { Component, OnInit } from '@angular/core';
import { BrandService } from '../services/brand.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import * as _ from 'lodash';

@Component({
  selector: 'product-brand',
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
      page: this.page
    })
      .then(resp => {
        this.items = resp.data.items;
        this.total = resp.data.count;
      })
      .catch(() => alert('Something went wrong, please try again!'));
  }

  remove(item: any, index: number) {
    if (window.confirm('Are you sure want to delete this brand?')) {
      this.drandService.remove(item._id)
        .then(() => {
          this.toasty.success('Brand has been deleted!');
          this.items.splice(index, 1);
        })
        .catch((err) => this.toasty.error(err.data.message || 'Something went wrong, please try again!'));
    }
  }

}

@Component({
  selector: 'product-brand-create',
  templateUrl: './form.html'
})
export class ProductBrandCreateComponent implements OnInit {
  public brand: any = {
    name: '',
    description: '',
    logo: null,
    // meta:''
    };

  public tree: any = [];
  public imageUrl: string = '';

  constructor(private router: Router, private drandService: BrandService, private toasty: ToastyService) {
  }

  ngOnInit() {
    
  }

  submit(frm: any) {
    if (!this.brand.name) {
      return this.toasty.error('Please enter brand name');
    }

    this.drandService.create(this.brand)
      .then(() => {
        this.toasty.success('Brand has been updated');
        this.router.navigate(['/products/brands']);
      }, err => this.toasty.error(err.data.data.details[0].message || err.data.message || 'Something went wrong!'));
  }

  selectImage(media: any) {
    this.brand.logo = media._id;
    this.imageUrl = media.fileUrl;
  }
}


@Component({
  selector: 'product-brand-update',
  templateUrl: './form.html'
})
export class ProductBrandUpdateComponent implements OnInit {
  public brand: any = {
    name: '',
    description: '',
    logo: null,
    };

  public tree: any = [];
  public imageUrl: string = '';
  private brandId: string;

  constructor(private router: Router, private route: ActivatedRoute, private drandService: BrandService, private toasty: ToastyService) {
  }

  ngOnInit() {
    this.brandId = this.route.snapshot.paramMap.get('id');
    
    this.drandService.findOne(this.brandId)
    .then(resp => {
      this.brand = resp.data;
      delete this.brand['totalProduct'];
      delete this.brand['meta'];
      if (typeof this.brand.logo === 'string') {
        this.imageUrl = this.brand.logo;
      } else if (this.brand.logo) {
        this.imageUrl = this.brand.logo.fileUrl;
        this.brand.logo = this.brand.logo._id;
      }
      return true;
    });
  }

  submit(frm: any) {
    if (!this.brand.name) {
      return this.toasty.error('Please enter brand name');
    }
    console.log(this.brandId);
    console.log(this.brand);
    this.drandService.update(this.brandId, this.brand)
      .then(() => {
        this.toasty.success('Brand has been updated');
        this.router.navigate(['/products/brands']);
      }, err => this.toasty.error(err.data.data.details[0].message || err.data.message || 'Something went wrong!'));
  }

  selectImage(media: any) {
    this.brand.logo = media._id;
    this.imageUrl = media.fileUrl;
  }
}
