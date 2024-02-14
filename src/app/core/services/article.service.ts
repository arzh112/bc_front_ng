import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  apiArticlesUrl: string = environment.apiUrl + "/api/articles";

  constructor(private http: HttpClient) { }

  getAllArticle(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiArticlesUrl);
  }

  getArticleById(articleId: number): Observable<Article> {
    return this.http.get<Article>(this.apiArticlesUrl + "/" + articleId);
  }
}
