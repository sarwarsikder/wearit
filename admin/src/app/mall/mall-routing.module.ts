import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MallCreateComponent } from './mall-create/mall-create.component';
import { MallUpdateComponent } from './mall-update/mall-update.component';
import { MallsComponent } from './malls/malls.component';

const routes: Routes = [
  {
    path: "",
    component: MallsComponent,
    data: {
      title: "Manage malls",
      urls: [{ title: "Malls", url: "/malls" }, { title: "Listing" }],
    }
  },
  {
    path: "create",
    component: MallCreateComponent,
    data: {
      title: "Manage malls",
      urls: [
        { title: "Banners", url: "/malls" },
        { title: "Create new mall" },
      ],
    },
  },
  {
    path: "update/:id",
    component: MallUpdateComponent,
    data: {
      title: "Manage malls",
      urls: [{ title: "malls", url: "/malls" }, { title: "Update mall" }],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MallRoutingModule { }
