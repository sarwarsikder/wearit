import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from '../nav/base/base.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'edit', component: EditProfileComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
