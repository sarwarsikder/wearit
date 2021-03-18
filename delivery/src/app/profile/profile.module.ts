import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxDropzoneModule } from "ngx-dropzone";

import { ProfileRoutingModule } from './profile-routing.module';
import { IndexComponent } from './index/index.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


@NgModule({
  declarations: [IndexComponent, EditProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NgxDropzoneModule,
    FormsModule
  ]
})
export class ProfileModule { }
