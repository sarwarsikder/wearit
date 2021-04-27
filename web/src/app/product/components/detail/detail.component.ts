import { Component, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService, CartService, AuthService } from '../../../shared/services';
import { ProductService, ProductVariantService } from '../../services';
import { WishlistService } from '../../../profile/services';
import { ToastyService } from 'ng2-toasty';
import { TranslateService } from '@ngx-translate/core';
import { ShareButtons } from '@ngx-share/core';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { WishListService } from '../../../shared/services/wish-list.service';
import { Lightbox } from 'ngx-lightbox';


@Component({
  templateUrl: './detail.html'
})
export class ProductDetailComponent implements OnDestroy {
  public product: any;
  public discount: any = 100;
  public discountVal: any = 100;
  public variants: any = [];
  public isVariant: any = false;
  public tab: any = 'detail';
  public selectedVariant: any;
  public page: any = 1;
  public quantity: any = 1;
  public activeSlide: any = {};
  public slidePosition: any = 0;
  private productSubscription: Subscription;
  public slideConfig: any = {
    'slidesToShow': 5,
    'slidesToScroll': 5
  };
  public price: any = 0;
  public salePrice: any = 0;
  public stockQuantity: any = 0;
  public isShowVar: any = false;
  public userID: any;
  @Input() showDeal: any = 0;

  public shop: any;
  public products = [];
  public take: any = 12;
  public totalProducts: any = 0;
  public isLoading: Boolean = false;
  public searchFields: any = {
    q: ''
  };

  public sizeChartImageUrl: any = '';
  private _album: any = [];
  private inputnumber: any = 0;

  constructor(private translate: TranslateService, private route: ActivatedRoute, private productService: ProductService,
    private authService: AuthService, private seoService: SeoService, private variantService: ProductVariantService,
    public share: ShareButtons, private wishlistService: WishlistService, private toasty: ToastyService,
    private cartService: CartService, private wishListService: WishListService, private _lightbox: Lightbox) {
    if (this.authService.isLoggedin()) {
      this.authService.getCurrentUser().then(res => this.userID = res._id);
    }

    this.product = route.snapshot.data.product;



    if (this.product.shop) {
      this.shop = this.product.shop;
      this.shop.id = this.product.shop._id;
      this.query();
    }

    if (this.product.shop && this.product.shop.gaCode) {
      seoService.trackPageViewForShop(this.product.shop._id, this.product.shop.gaCode);
    }

    this.productSubscription = this.route.data.subscribe(data => {
      this.product = data.product;
      this.updateSeo();
      this.selectedVariant = {};
      this.isVariant = false;
      this.quantity = 1;
      if (this.product.images.length) {
        this.activeSlide = this.product.images[0];
      } else if (!this.product.images.length && this.product.mainImage) {
        this.activeSlide = this.product.mainImage;
      }

      if (this.product.sizeChart) {
        this.sizeChartImageUrl = this.product.sizeChart.mediumUrl;

        const src = this.sizeChartImageUrl;
        const caption = "";
        const thumb = this.sizeChartImageUrl;
        const album = {
          src: src,
          caption: caption,
          thumb: thumb
        };

        this._album.push(album);
      }

      this.setPrice(this.product);
      this.getVariants();
    });
  }

  query() {
    const params = Object.assign({
      shopId: this.shop.id,
      page: this.page,
      take: this.take
    }, this.searchFields);

    this.productService.search(params).then((res) => {
      let index = res.data.items.indexOf(this.product);
      res.data.items.splice(index, 1);
      this.products = this.shuffle(res.data.items);
      this.totalProducts = res.data.count;
      const n = 2;
      this.products = this.products
        .map(x => ({ x, r: Math.random() }))
        .sort((a, b) => a.r - b.r)
        .map(a => a.x)
        .slice(0, n);

    })
      .catch(() => this.toasty.error(this.translate.instant('Something went wrong, please try again!')));
  }


  shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  plus() {
    this.quantity = this.quantity + 1;
  }
  minus() {
    if (this.quantity != 0) {
      this.quantity = this.quantity - 1;
    }

  }

  updateSeo() {
    let image = '';
    if (this.product.mainImage) {
      image = this.product.mainImage.mediumUrl;
    } else if (this.product.images.length) {
      image = this.product.images[0].mediumUrl;
    }
    this.seoService.update(this.product.name, this.product.metaSeo, image);
  }

  openVariant() {
    this.isShowVar = !this.isShowVar;
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }

  setPrice(product: any) {
    const vatSalePrice = product.salePrice * this.product.taxPercentage / 100 || 0;
    const vatBasePrice = product.price * this.product.taxPercentage / 100 || 0;
    this.price = product.price + vatBasePrice || product.price;
    this.salePrice = product.salePrice + vatSalePrice || product.salePrice;
    this.discountVal = this.price ? ((this.price - this.salePrice) / this.price * 100).toFixed(2) : 0;
    this.stockQuantity = product.stockQuantity;
  }

  getVariants() {
    this.variantService.search(this.product._id, { take: 100 }).then((resp) => {
      this.variants = resp.data.items;
    });
  }

  changeSlide(index: number) {
    this.slidePosition = index;
    this.activeSlide = this.product.images[index];
  }

  selectVariant(val: any, index: any) {
    if (this.selectedVariant && this.selectedVariant === val) {
      this.isVariant = false;
      this.selectedVariant.isSelected = false;
      this.setPrice(this.product);
      this.selectedVariant = {};
      return;
    }
    this.isVariant = true;
    if (this.selectedVariant) {
      this.selectedVariant.isSelected = false;
    }
    this.selectedVariant = val;
    this.variants[index].isSelected = true;
    this.setPrice(this.variants[index]);
  }

  addWishList(item: any) {
    if (!this.authService.isLoggedin()) {
      return this.toasty.error(this.translate.instant('Please login before adding to wishlist.'));
    }
    console.log("Add WiseList");
    console.log(item._id);
    this.wishlistService.create({ productId: item._id })
      .then(resp => {
        console.log(resp.data._id);
        this.toasty.success(this.translate.instant('Added to wishlist successfully.'));
        this.wishListService.add({
          productId: resp.data._id
        });
      })
      .catch(err => this.toasty.error(err.data.data.message || this.translate.instant('Error occured, please try again later.')));
  }

  addCart() {

    if (!this.stockQuantity) {
      return this.toasty.error(this.translate.instant('This item is out of stock.'));
    }

    if (this.quantity > this.stockQuantity) {
      return this.toasty.error(this.translate.instant('Quantity is not valid, please check and try again!'));
    }
    this.cartService.add({
      productId: this.isVariant ? this.selectedVariant.productId : this.product._id,
      productVariantId: this.isVariant ? this.selectedVariant._id : null,
      variant: this.isVariant ? this.selectedVariant : null,
      product: this.product
    }, this.quantity);
  }


  onlyNumberKey(event) {
    return (event.charCode === 8 || event.charCode === 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }

  open(index: number): void {
    // open lightbox
    console.log(index);
    console.log(this._album);
    this._lightbox.open(this._album, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
