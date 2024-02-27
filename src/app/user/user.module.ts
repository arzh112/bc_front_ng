import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { AccountComponent } from './components/account/account.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RegisterComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule

  ],
  exports: [
    RegisterComponent,
    AccountComponent
  ]
})
export class UserModule { }
