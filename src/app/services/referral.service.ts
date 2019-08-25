import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Referral } from '../interfaces/referral';
import { AppConfig } from '../config/config';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReferralService {
  url = AppConfig.apiBaseUrl;
  constructor(private http: HttpClient) { }
  getReferralsByUser(userId: string): Observable<Referral[]> {
    return this.http.get<Referral[]>('assets/data/referrals.json');
  }
  getReferralById(referralId: string): Observable<Referral> {
    return this.http.get<Referral>('assets/data/singlereferral.json');
  }
  addReferral(referral: any): Observable<Referral> {
    console.log(referral);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Referral>(this.url + '/InsertReferralDetails/',
      referral, httpOptions).pipe(
        tap((referral: Referral) => console.log('added referral w/ id=${referral.id}')),
        catchError(this.handleError<Referral>('addReferral'))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  // addProduct (product): Observable<Product> {
  //   return this.http.post<Product>(apiUrl, product, httpOptions).pipe(
  //     tap((product: Product) => console.log(`added product w/ id=${product._id}`)),
  //     catchError(this.handleError<Product>('addProduct'))
  //   );
  // }
  // updateReferral(referral: Referral): Observable<Referral> {
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //   return this.http.put<Referral>(this.url + '/UpdateReferralDetails/',
  //     referral, httpOptions);
  // }
  // deleteReferralById(referralid: string): Observable<number> {
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //   return this.http.delete<number>(this.url + '/DeleteReferralDetails?id=' + referralid,
  //     httpOptions);
  // }

  // getProducts (): Observable<Product[]> {
  //   return this.http.get<Product[]>(apiUrl)
  //     .pipe(
  //       tap(heroes => console.log('fetched products')),
  //       catchError(this.handleError('getProducts', []))
  //     );
  // }

  // getProduct(id): Observable<Product> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.get<Product>(url).pipe(
  //     tap(_ => console.log(`fetched product id=${id}`)),
  //     catchError(this.handleError<Product>(`getProduct id=${id}`))
  //   );
  // }

  // addProduct (product): Observable<Product> {
  //   return this.http.post<Product>(apiUrl, product, httpOptions).pipe(
  //     tap((product: Product) => console.log(`added product w/ id=${product._id}`)),
  //     catchError(this.handleError<Product>('addProduct'))
  //   );
  // }

  // updateProduct (id, product): Observable<any> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.put(url, product, httpOptions).pipe(
  //     tap(_ => console.log(`updated product id=${id}`)),
  //     catchError(this.handleError<any>('updateProduct'))
  //   );
  // }

  // deleteProduct (id): Observable<Product> {
  //   const url = `${apiUrl}/${id}`;

  //   return this.http.delete<Product>(url, httpOptions).pipe(
  //     tap(_ => console.log(`deleted product id=${id}`)),
  //     catchError(this.handleError<Product>('deleteProduct'))
  //   );
  // }
}
