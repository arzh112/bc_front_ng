import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './components/account/account.component';


@NgModule({
  declarations: [
    RegisterComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    RegisterComponent,
    AccountComponent
  ]
})
export class UserModule { }
