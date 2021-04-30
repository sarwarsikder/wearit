import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MallRoutingModule } from './mall-routing.module';
import { MallsComponent } from './malls/malls.component';
import { MallService } from './mall.service';
import { MallCreateComponent } from './mall-create/mall-create.component';
import { MediaModule } from '../media/media.module';
import { FormsModule } from '@angular/forms';
import { MallUpdateComponent } from './mall-update/mall-update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [MallsComponent, MallCreateComponent, MallUpdateComponent],
  imports: [
    CommonModule,
    MallRoutingModule,
    MediaModule,
    FormsModule,
    NgbModule
  ],
  providers: [MallService],
})
export class MallModule { }
