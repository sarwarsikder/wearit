import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';
import { LocationService } from '../../shared/services';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, tap, switchMap } from 'rxjs/operators';

import * as _ from 'lodash';
import { BrandService } from '../services/brand.service';

@Component({
  selector: 'product-update',
  templateUrl: './form.html'
})
export class ProductUpdateComponent implements OnInit {
  public product: any;
  public tree: any = [];
  public newSpecification: any = {
    key: '',
    value: ''
  };
  public imageUrl: any = '';
  public videoUrl: any = '';
  public images: any = [];
  public mainImage: any = '';
  public tab = 'info';
  public freeShipAreas: any = [];
  public restrictCODAreas: any = '';
  public countries: any = [];
  public states: any = [];
  public cities: any = [];
  public zipCode: any = '';
  public freeCountry: any;
  public freeState: any;
  public freeCity: any;
  public dealDate: any;
  public brand: any;
  public sizeChart: any = '';

  public imagesOptions: any = {
    multiple: true
  };
  public isUpdate: any = true;
  public fileOptions: any = {};

  public searching: any = false;
  public searchFailed: any = false;

  formatter_brand = (x: {
    name: string,
    owner: {
      name: string
    }
  }) => {
    
  }

  search_brand = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    tap(() => this.searching = true),
    switchMap(term =>
      this.drandService.search({ name: term }).then((res) => {
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

  constructor(private router: Router, private route: ActivatedRoute, private categoryService: ProductCategoryService,private drandService: BrandService,
    private productService: ProductService, private toasty: ToastyService, private location: LocationService) {
    if (route.snapshot.queryParams.tab) {
      this.tab = route.snapshot.queryParams.tab;
    }
  }

  ngOnInit() {
    this.fileOptions = {
      url: window.appConfig.apiBaseUrl + '/media/files',
      onFinish: (resp) => {
        this.product.digitalFileId = resp.data._id;
      }
    };
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.findOne(id)
      .then(resp => {
        this.product = resp.data;
        if (this.product.dailyDeal && this.product.dealTo) {
          const day = new Date(this.product.dealTo).getDate();
          const month = new Date(this.product.dealTo).getMonth() + 1;
          const year = new Date(this.product.dealTo).getFullYear();
          this.dealDate = {
            year: year,
            month: month,
            day: day
          };
        }
        this.freeShipAreas = resp.data.restrictFreeShipAreas;
        this.mainImage = resp.data.mainImage ? resp.data.mainImage._id : null;
        this.images = this.product.images;

        this.sizeChart = this.product.sizeChart ? this.product.sizeChart.thumbUrl : null;
        this.product.sizeChart = this.product.sizeChart ? this.product.sizeChart._id : null;


        console.log( this.product.sizeChart.thumbUrl );

      });
    this.categoryService.tree()
      .then(resp => (this.tree = this.categoryService.prettyPrint(resp.data)));

    this.location.countries().then((resp) => {
      this.countries = resp.data;
    });
  }

  submit(frm) {
    if (frm.$invalid) {
      this.toasty.error('Invalid form, please check again.');
    }

    if (this.product.salePrice > this.product.price || this.product.salePrice < 0.1 || this.product.price < 0.1) {
      return this.toasty.error('Price or sale price is invalid.');
    }

    if (this.product.minimumPurchaseQuantity > this.product.stockQuantity || this.product.minimumPurchaseQuantity < 0) {
      return this.toasty.error('Minimum purchase quantity is invalid.');
    }

    if (this.product.maximumPurchaseQuantity > this.product.stockQuantity || this.product.minimumPurchaseQuantity < 0 || this.product.minimumPurchaseQuantity < this.product.minimumPurchaseQuantity) {
      return this.toasty.error('Maximum purchase quantity is invalid.');
    }


    if (this.product.dailyDeal && this.dealDate) {
      this.product.dealTo = new Date(this.dealDate.year, this.dealDate.month - 1, this.dealDate.day).toUTCString();
    }

    if (this.product.type === 'digital' && !this.product.digitalFileId) {
      return this.toasty.error('Please select Digital file path!');
    }

    if (this.brand) {
      this.product.brandId = this.brand._id;
    }

    this.product.restrictFreeShipAreas = [];
    this.freeShipAreas.forEach((item) => {
      const data = _.pick(item, ['areaType', 'value', 'name']);
      this.product.restrictFreeShipAreas.push(data);
    });
   

    this.product.images = this.images.map(i => i._id);
    this.product.mainImage = this.mainImage || null;
    
    this.productService.update(this.product._id, this.product).then(resp => {
      this.toasty.success('Updated successfully.');
      // this.router.navigate(['/products']);
    });
  }

  changeAlias() {
    this.product.alias = this.product.name.split(' ').join('-');;
  }

  addSpecification() {
    if (!this.newSpecification.value.trim()) {
      return this.toasty.error('Please enter specification value');
    }
    this.product.specifications.push(this.newSpecification);
    this.newSpecification = { key: '', value: '' };
  }

  selectImage(media: any) {
    if (media.type !== 'photo') {
      return this.toasty.error('Please select image!');
    }

    this.images.push(media);
  }

  selectSizeImage(media: any) {
    this.product.sizeChart = media._id;
    this.sizeChart = media.fileUrl;
  }

  setMain(media: any) {
    this.mainImage = media._id;
  }

  // selectDigital(media: any) {
  //   this.product.digitalFileId = media._id;
  // }

  removeImage(media: any, index: any) {
    if (media._id === this.mainImage) {
      this.mainImage = null;
    }
    this.images.splice(index, 1);
  }

  changeTab(tab: string) {
    this.tab = tab;
  }

  loadStates(COD: any) {
    this.location.states({ country: COD }).then((res) => {
      this.states = res.data;
    });
  }

  loadCities(id: any) {
    this.location.cities({ state: id }).then((res) => {
      this.cities = res.data;
    });
  }


  addFreeShipAreas() {
    if (this.zipCode) {
      const data = {
        areaType: 'zipcode',
        value: this.zipCode
      };
      this.freeShipAreas.push(data);
      this.zipCode = '';
    } else if (!this.zipCode && this.freeCountry && !this.freeState) {
      const data = {
        areaType: 'country',
        value: this.freeCountry.isoCode,
        name: this.freeCountry.name
      };
      this.freeShipAreas.push(data);
      this.freeCountry = {};
    } else if (!this.zipCode && this.freeCountry && this.freeState && !this.freeCity) {
      const data = {
        areaType: 'state',
        value: this.freeState._id,
        name: this.freeState.name
      };
      this.freeShipAreas.push(data);
      this.freeState = {};
    } else if (!this.zipCode && this.freeCountry && this.freeState && this.freeCity) {
      const data = {
        areaType: 'city',
        value: this.freeCity._id,
        name: this.freeCity.name
      };
      this.freeShipAreas.push(data);
      this.freeCity = {};
    }
  }

  addRestrictCODAreas() {
    if (this.restrictCODAreas) {
      this.product.restrictCODAreas.push(this.restrictCODAreas);
      this.restrictCODAreas = '';
    }
  }

  removeArea(index: number) {
    this.freeShipAreas.splice(index, 1);
  }

  removeCodeArea(index: number) {
    this.product.restrictCODAreas.splice(index, 1);
  }

  removeSpec(i: number) {
    this.product.specifications.splice(i, 1);
  }
}
