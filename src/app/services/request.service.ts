import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  request(url: string, httpParams?: HttpParams): Observable<Object> {
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

  post(url: string, httpParams?: HttpParams): Observable<Object> {
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

  // ? Preguntar como detecta si el fallo es de cliente o de servidor
  // ! COPIADO ! //

  private handleError(error: HttpErrorResponse) {
    let errorMessage = {};
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = { error: error.error.message };
    } else {
      // server-side error
      errorMessage = { errorCode: error.status, message: error.message };
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
