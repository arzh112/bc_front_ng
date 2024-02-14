import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { serviceResolver } from './resolvers/service.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { services: serviceResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
