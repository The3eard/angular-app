import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  request(url: string, httpParams?: HttpParams): Observable<any> {
    const params = {};
    if (httpParams) {
      httpParams.keys().forEach(k => {
        params[k] = httpParams.get(k);
      });
    }
    return this.http
      .get(url, httpParams ? { params } : undefined)
      .pipe(catchError(this.handleError));
  }

  requestNba(url: string, httpParams: HttpParams): Observable<any> {
    const params = {};
    httpParams.keys().forEach(k => {
      params[k] = httpParams.get(k);
    });
    let headers = new HttpHeaders();
    headers = headers.append('x-rapidapi-host', 'free-nba.p.rapidapi.com');
    headers = headers.append('x-rapidapi-key', '3051d019c5msh1af9a8a2705638ep15676cjsn0f0733ee7ee8');
    return this.http
      .get(url, { params, headers })
      .pipe(catchError(this.handleError));
  }

  post(url: string, httpParams?: HttpParams): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('accept', 'application/json');
    const params = {};
    if (httpParams) {
      httpParams.keys().forEach(k => {
        params[k] = httpParams.get(k);
      });
    }
    return this.http
      .post(url, httpParams ? params : undefined, { headers })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = {};
    if (error.error instanceof ErrorEvent) {
      errorMessage = { error: error.error.message };
    } else {
      errorMessage = { errorCode: error.status, message: error.message };
    }
    return throwError(errorMessage);
  }


}
