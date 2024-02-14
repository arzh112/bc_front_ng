import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { httpInterceptorProviders } from './interceptors';
import * as fr from '@angular/common/locales/fr';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    httpInterceptorProviders,
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ]
})
export class CoreModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
