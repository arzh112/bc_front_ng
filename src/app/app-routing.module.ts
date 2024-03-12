import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',  loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'login',  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'user',  loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'shop',  loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) },
  { path: '**',  redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
