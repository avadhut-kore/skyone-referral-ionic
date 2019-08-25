import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../config/config';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    url = AppConfig.apiBaseUrl;
    constructor(private http: HttpClient) { }
    // getProductsByCategory(categoryId: string): Observable<Product[]> {
    //     return this.http.get<Product[]>('assets/data/products.json');
    // }

    getUserInfo(token): Observable<any> {
        let headers = new HttpHeaders();
        headers.append('Authorization', 'Bearer ' + token);
        headers.append('Content-Type', 'application/json');


        return this.http.get(AppConfig.apiBaseUrl + '/api/user', { headers: headers });
        // .toPromise()
        // .then(this.extractData)
        // .catch(this.handleErrorPromise);
    }

    signup(userdetails: any): Observable<any> {

        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post(AppConfig.apiBaseUrl + '/api/user/signup', userdetails, { headers: headers });
    }
}