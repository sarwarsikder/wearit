import { Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';

import { AuthGuard } from './shared/guard/auth.guard';
import { checkEmailPhoneGuard } from './shared/guard/checkEmailPhone.guard';
import { ConfigResolver } from './shared/resolver';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    resolve: { appConfig: ConfigResolver },
    children: [
      { path: '', 
        canActivate: [checkEmailPhoneGuard],
        loadChildren: './starter/starter.module#StarterModule' },
      { path: 'payment', 
        canActivate: [checkEmailPhoneGuard],
        loadChildren: './payment/payment.module#PaymentModule' },
      { path: 'contact',
        canActivate: [checkEmailPhoneGuard], 
        loadChildren: './contact/contact.module#ContactModule' },
      { path: 'page', 
        canActivate: [checkEmailPhoneGuard],
        loadChildren: './static-page/static-page.module#StaticPageModule' },
      { path: 'products', 
        canActivate: [checkEmailPhoneGuard],
        loadChildren: './product/product.module#ProductModule' },
      { path: 'shops',
        canActivate: [checkEmailPhoneGuard], 
        loadChildren: './shop/shop.module#ShopModule' },
      { path: 'malls',
        canActivate: [checkEmailPhoneGuard], 
        loadChildren: './mall/mall.module#MallModule' },
      {
        path: 'profile',
        canActivate: [AuthGuard],
        loadChildren: './profile/profile.module#ProfileModule'
      },
      { path: 'cart', canActivate: [checkEmailPhoneGuard], loadChildren: './cart/cart.module#CartModule' },
      {
        path: 'orders',
        canActivate: [AuthGuard, checkEmailPhoneGuard],
        loadChildren: './order/order.module#OrderModule'
      },
      {
        path: 'messages',
        canActivate: [AuthGuard, checkEmailPhoneGuard],
        loadChildren: './message/message.module#MessageModule'
      }
    ]
  },
  {
    path: 'auth',
    component: FullComponent,
    resolve: { appConfig: ConfigResolver },
    children: [
      { path: '', loadChildren: './auth/auth.module#AuthModule' }
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
