import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { AppConfig } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = AppConfig.apiBaseUrl;
  constructor(private http: HttpClient) { }
  getProductsByCategory(categoryId: string): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data/products.json');
  }
  getProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(this.url + '/GetProductDetailsById/' + productId);
  }
  createProduct(product: Product): Observable<Product> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Product>(this.url + '/InsertProductDetails/',
      product, httpOptions);
  }
  
  updateProduct(product: Product): Observable<Product> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Product>(this.url + '/UpdateProductDetails/',
      product, httpOptions);
  }
  deleteProductById(productid: string): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.url + '/DeleteProductDetails?id=' + productid,
      httpOptions);
  }
}
