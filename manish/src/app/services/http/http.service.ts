//https://angular.io/docs/ts/latest/tutorial/toh-pt6.html

import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

    private apiBaseUrl = "http://localhost:58551/api";
    private options: RequestOptions;

    constructor(private http: Http) {
        
    }

    private configure() {
        let token = localStorage.getItem('token');
        
        let headers = new Headers();
        headers = new Headers({ 
            'Content-Type': 'application/json'
        });

        this.options = new RequestOptions({ headers: headers });
    }    

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    search(url): Observable<any> {
        url = `${this.apiBaseUrl}/${url}`;        
        
        this.configure();

        return this.http
            .get(url, this.options)
            .map((r: Response) => r.json());
    }
    

    get(url): Promise<any> {
        url = `${this.apiBaseUrl}/${url}`;
        
        this.configure();

        return this.http.get(url, this.options)
            .toPromise()
            .then(response => response.json() )
            .catch(this.handleError);
    }

    post(url, data): Promise<any> {
        url = `${this.apiBaseUrl}/${url}`;
        
        this.configure();

        return this.http
            .post(url, JSON.stringify(data), this.options)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    delete(url): Promise<void> {
        url = `${this.apiBaseUrl}/${url}`;

        this.configure();
        
        return this.http.delete(url, this.options)
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}