import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RequestService } from './request.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private requestService: RequestService, private router: Router) { }

  login(userName: string, password: string): Observable<any> {
    const httpParams = new HttpParams()
      .set('userName', userName)
      .set('password', password);
    const urlRequest = `${environment.host}:${environment.port}/users`;
    return this.requestService.request(urlRequest, httpParams);
  }

  logOut() {
    sessionStorage.removeItem(environment.logginSessionToken);
    this.router.navigate(['login']);
  }

  signIn(userName: string, password: string): Observable<any> {
    const httpParams = new HttpParams()
      .set('userName', userName)
      .set('password', password)
      .set('profileId', '2');
    const urlRequest = `${environment.host}:${environment.port}/users`;
    return this.requestService.post(urlRequest, httpParams);
  }

  checkUserName(userName: string): Observable<any> {
    const httpParams = new HttpParams()
      .set('userName', userName);

    const urlRequest = `${environment.host}:${environment.port}/users`;
    return this.requestService.request(urlRequest, httpParams);
  }

  setLogged(loggedStatus: boolean, profile: string) {
    sessionStorage.setItem(environment.logginSessionToken, loggedStatus ? 'true' : 'false');
    sessionStorage.setItem(environment.profileIdSessionToken, profile);
  }

  isLogged(): boolean {
    return sessionStorage.getItem(environment.logginSessionToken) ? true : false;
  }
}
