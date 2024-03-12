import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';
import { inject } from '@angular/core';

export const articleResolver: ResolveFn<Article[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(ArticleService).getAllArticle();
};
