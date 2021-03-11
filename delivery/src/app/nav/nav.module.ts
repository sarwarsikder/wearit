import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BaseComponent } from './base/base.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TopBarComponent, SideBarComponent, BaseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
  ],
})
export class NavModule { }
