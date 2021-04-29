import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MallRoutingModule } from './mall-routing.module';
import { MallsComponent } from './malls/malls.component';


@NgModule({
  declarations: [MallsComponent],
  imports: [
    CommonModule,
    MallRoutingModule
  ]
})
export class MallModule { }
