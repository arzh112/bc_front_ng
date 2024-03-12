import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component';
import { authGuard } from '../core/guards/auth.guard';
import { articleResolver } from '../core/resolvers/article.resolver';
import { serviceResolver } from '../core/resolvers/service.resolver';
import { userResolver } from '../core/resolvers/user.resolver';

const routes: Routes = [
  { path: '', component: ShopComponent, canActivate: [authGuard], resolve: { articles: articleResolver, services: serviceResolver, user: userResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
