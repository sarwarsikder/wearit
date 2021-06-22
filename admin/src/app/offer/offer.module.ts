import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import {
  OfferComponent,
  OfferCreateComponent,
  OfferUpdateComponent,
} from "./offer.component";

import { OfferService } from "./offer.service";

import { MediaModule } from "../media/media.module";

const routes: Routes = [
  {
    path: "",
    component: OfferComponent,
    data: {
      title: "Manage offers",
      urls: [{ title: "Offers", url: "/offer" }, { title: "Listing" }],
    },
  },
  {
    path: "create",
    component: OfferCreateComponent,
    data: {
      title: "Manage offers",
      urls: [
        { title: "Offers", url: "/offer" },
        { title: "Create new offer" },
      ],
    },
  },
  {
    path: "update/:id",
    component: OfferUpdateComponent,
    data: {
      title: "Manage offers",
      urls: [{ title: "Offers", url: "/offer" }, { title: "Update offer" }],
    },
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MediaModule,
    RouterModule.forChild(routes),
  ],
  declarations: [OfferComponent, OfferCreateComponent, OfferUpdateComponent],
  providers: [OfferService],
  exports: [],
  entryComponents: [],
})
export class OfferModule {}
