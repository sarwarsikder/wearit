import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MallRoutingModule } from './mall.routing';
import { ProductModule } from '../product/product.module';
import { UtilsModule } from '../utils/utils.module';
import { MessageModule } from '../message/message.module';

import { MallDetailComponent } from './components/detail/detail.component';
import { ReportComponent } from './components/report/report.component';
import { SearchComponent } from './components/search/search.component';
import { MallCardComponent } from './components/mall-card/mall-card.component';

import { MallResolver } from './resolvers/mall.resolver';
import { SearchResolver } from './resolvers/search.resolver';

import { MallService, ReportService } from './services';
import { LocationService, GoogleAnalyticsService } from '../shared/services';

import { MallBannerPipe, MallLogoPipe } from '../shared/pipes';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    //our custom module
    MallRoutingModule,
    NgbModule,
    ProductModule,
    UtilsModule,
    MessageModule,
    AutocompleteLibModule,
  ],
  declarations: [
    MallDetailComponent, ReportComponent, SearchComponent, MallCardComponent,
    MallBannerPipe, MallLogoPipe
  ],
  providers: [
    MallService,
    MallResolver,
    SearchResolver,
    ReportService,
    LocationService,
    GoogleAnalyticsService
  ],
  exports: [
    MallCardComponent,
    SearchComponent
  ],
  entryComponents: [ReportComponent]
})
export class MallModule { }
