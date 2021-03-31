import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { IndexComponent } from './index/index.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxPaginationModule,
  ]
})
export class DashboardModule { }
