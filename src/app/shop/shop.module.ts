import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './components/shop/shop.component';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './components/cart/cart.component';


@NgModule({
  declarations: [
    ShopComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule
  ],
  exports: [
    ShopComponent
  ]
})
export class ShopModule { }
