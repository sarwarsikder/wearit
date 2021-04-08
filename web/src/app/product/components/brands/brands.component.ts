import { Input, OnChanges, SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../shared/services/utils.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'brands',
  templateUrl: './brands.component.html',
})
export class BrandsComponent implements OnChanges {
  @Input() options: any = '';
  public items: any = [];
  public page: any = 1;
  public itemsPerPage: any = 8;
  public searchFields: any = {};
  public sort: any = 'random';
  public sortType: any = '';
  public slideConfig: any = {
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: true,
    autoplay: false,
    nextArrow: '<div class="next-1">></div>',
    prevArrow: '<div class="prev-1"><</div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };


  constructor(private util: UtilService, private productService: ProductService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.brands();
    console.log("TEST_one");

  }

  brands(){
    this.util.setLoading(true);
    const params = Object.assign({
      page: this.page,
      take: this.itemsPerPage,
      sort: this.sort,
      sortType: this.sortType
    }, this.options);

    this.productService.brands(params).then((res) => {
      this.items = res.data.items;
      this.util.setLoading(false);
    }).catch(() => this.util.setLoading(false));
  }
}

