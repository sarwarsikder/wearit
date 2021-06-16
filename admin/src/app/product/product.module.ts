import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SortablejsModule } from "ngx-sortablejs";
import { FroalaEditorModule, FroalaViewModule } from "angular-froala-wysiwyg";
import { ProductRoutingModule } from "./product.routing";
import { MediaModule } from "../media/media.module";

import { ProductListingComponent } from "./product/listing.component";
import { ProductPendingListingComponent } from "./product/pending-listing.component";
import { ProductUpdateComponent } from "./product/update.component";
import { ProductCreateComponent } from "./product/create.component";
import { ReviewsComponent } from "./reviews/listing.component";
import {
  ProductCategoriesComponent,
  ProductCategoryCreateComponent,
  ProductCategoryUpdateComponent,
} from "./category/category.component";
import {
  OptionsComponent,
  OptionCreateComponent,
  OptionUpdateComponent,
} from "./options/options.component";
import {
  VariantUpdateModalComponent,
  ProductVariantsComponent,
} from "./variants/product-variants.component";
import { BrandComponent } from './brand/brand.component';
import { ProductBrandCreateComponent } from './brand/brand.component';
import { ProductBrandUpdateComponent } from './brand/brand.component';


import { ProductCategoryService } from "./services/category.service";
import { OptionService } from "./services/option.service";
import { ProductService } from "./services/product.service";
import { ProductVariantService } from "./services/variant.service";
import { ReviewService } from "./services/review.service";
import { BrandService } from "./services/brand.service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SortablejsModule,
    //our custom module
    ProductRoutingModule,
    NgbModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    MediaModule,
  ],
  declarations: [
    ProductCategoriesComponent,
    ProductCategoryCreateComponent,
    ProductCategoryUpdateComponent,
    OptionsComponent,
    OptionCreateComponent,
    OptionUpdateComponent,
    ProductListingComponent,
    ProductPendingListingComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    VariantUpdateModalComponent,
    ProductVariantsComponent,
    ReviewsComponent,
    BrandComponent,
    ProductBrandCreateComponent,
    ProductBrandUpdateComponent
  ],
  providers: [
    ProductCategoryService,
    OptionService,
    ProductService,
    ProductVariantService,
    ReviewService,
    BrandService

  ],
  exports: [],
  entryComponents: [VariantUpdateModalComponent],
})
export class ProductModule {}
