import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxStripeModule } from 'ngx-stripe';
import { UtilsModule } from '../utils/utils.module';

import {
  CheckoutComponent,
  CheckoutSuccessComponent,
  CodVerifyModalComponent,
  CheckoutCancelComponent
} from './components';

import { NoPhotoPipe } from '../shared/pipes';
import { ConfigResolver } from '../shared/resolver';
import { OrderService } from '../order/services/order.service';
import { TransactionService } from './services/transaction.service';
import { CouponService } from './services/coupon.service';

import { CartResolver } from './resolvers/cart.resolver';
import { LocationService } from '../shared/services';

const routes: Routes = [{
  path: 'checkout',
  component: CheckoutComponent,
  resolve: {
    appConfig: ConfigResolver,
    cart: CartResolver
  }
}, {
  path: 'checkout/success',
  component: CheckoutSuccessComponent
},
{
  path: 'checkout/cancel',
  component: CheckoutCancelComponent
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forChild(routes),
    UtilsModule,
    NgxStripeModule.forRoot()
  ],
  exports: [

  ],
  declarations: [
    CheckoutComponent,
    CheckoutSuccessComponent,
    CodVerifyModalComponent,
    CheckoutCancelComponent,
    NoPhotoPipe
  ],
  entryComponents: [
    CodVerifyModalComponent
  ],
  providers: [
    OrderService,
    TransactionService,
    CartResolver,
    CouponService,
    LocationService
  ]
})

export class CartModule { }
