import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Category } from '../models/category';
import { inject } from '@angular/core';
import { CategoryService } from '../services/category.service';

export const categoryResolver: ResolveFn<Category[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(CategoryService).getAllCategories();
};
