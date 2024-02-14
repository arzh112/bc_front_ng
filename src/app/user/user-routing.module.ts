import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { AccountComponent } from './components/account/account.component';
import { orderResolver } from './resolvers/order.resolver';
import { userResolver } from './resolvers/user.resolver';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'account', component: AccountComponent, resolve: { orders: orderResolver, user: userResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }