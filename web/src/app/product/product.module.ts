import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductRoutingModule } from './product.routing';
import { CartModule } from '../cart/cart.module';
import { ShareModule } from '@ngx-share/core';

import { NgxImageZoomModule } from 'ngx-image-zoom';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { ProductDetailComponent } from './components/detail/detail.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RelatedProductCardComponent } from './components/product-card/related-product-card.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { RelatedProductsComponent } from './components/featured-products/related-products.component';
import { SearchComponent } from './components/search/search.component';
import { SearchSidebarComponent } from './components/search-sidebar/search-sidebar.component';
import { BrandsComponent} from './components/brands/brands.component';
import { BrandCardComponent} from './components/brand-card/brand-card.component'

import { OfferComponent } from './components/offer/offer.component';
import { OfferCardComponent } from './components/offer-card/offer-card.component';

import { CategoryService, ProductService, ProductVariantService } from './services';
import { ReviewService, GoogleAnalyticsService } from '../shared/services';
import { WishlistService } from '../profile/services';

import { ProductResolver } from './resolvers/product.resolver';
import { SearchResolver } from './resolvers/search.resolver';
import { CurrencyPipe } from '../shared/pipes';

import { MessageModule } from '../message/message.module';
import { from } from 'rxjs';
import { UtilsModule } from '../utils/utils.module';
import { LightboxModule } from 'ngx-lightbox';
import {SafePipeModule} from 'safe-pipe'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    NgbModule,
    NgxImageZoomModule,
    ShareModule.forRoot(),
    CartModule,
    UtilsModule,
    SlickCarouselModule,
    MessageModule,
    LightboxModule,
    SafePipeModule
  ],
  declarations: [
    ProductDetailComponent,
    FeaturedProductsComponent,
    RelatedProductCardComponent,
    RelatedProductsComponent,
    ProductCardComponent,
    SearchSidebarComponent,
    SearchComponent,
    BrandsComponent,
    OfferComponent,
    OfferCardComponent,
    BrandCardComponent,
    CurrencyPipe,
  ],
  providers: [
    CategoryService, ProductService, ProductResolver, SearchResolver,
    ProductVariantService, ReviewService, WishlistService, GoogleAnalyticsService
  ],
  exports: [
    FeaturedProductsComponent,
    RelatedProductCardComponent,
    RelatedProductsComponent,
    ProductCardComponent,
    SearchSidebarComponent,
    BrandsComponent,
    BrandCardComponent,
    OfferComponent,
    OfferCardComponent,
    SearchComponent,
  
    
  ]
})
export class ProductModule { }
