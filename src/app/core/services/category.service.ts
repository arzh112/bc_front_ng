import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiCategoriesUrl: string = environment.apiUrl + "/api/categories";

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiCategoriesUrl);
  }

  getCategoryById(categoryId: number): Observable<Category> {
    return this.http.get<Category>(this.apiCategoriesUrl + "/" + categoryId);
  }
}
