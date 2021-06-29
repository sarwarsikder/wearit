import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeasurementRoutingModule } from './measurement.routing';
import { FormsModule } from "@angular/forms";

import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    FormsModule,
    MeasurementRoutingModule
  ]
})
export class MeasurementModule { }
