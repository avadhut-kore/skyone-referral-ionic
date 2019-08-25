import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';
import { AppConfig } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = AppConfig.apiBaseUrl;
  constructor(private http: HttpClient) { }
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('assets/data/categories.json');
  }
  getCategoryById(categoryId: string): Observable<Category> {
    // return this.http.get<Category>(this.url + '/GetCategoryDetailsById/' + categoryId);
    return this.http.get<Category>('assets/data/singlecategory.json');
  }
  createCategory(category: Category): Observable<Category> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Category>(this.url + '/InsertCategoryDetails/',
      category, httpOptions);
  }
  updateCategory(category: Category): Observable<Category> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Category>(this.url + '/UpdateCategoryDetails/',
      category, httpOptions);
  }
  deleteCategoryById(categoryid: string): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.url + '/DeleteCategoryDetails?id=' + categoryid,
      httpOptions);
  }
}
