import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MallsComponent } from './malls/malls.component';

const routes: Routes = [
  {
    path: "",
    component: MallsComponent,
    data: {
      title: "Manage malls",
      urls: [{ title: "Malls", url: "/malls" }, { title: "Listing" }],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MallRoutingModule { }
