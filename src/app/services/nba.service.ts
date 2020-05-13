import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NbaService {
  number = '15';
  constructor(private requestService: RequestService) { }

  search(search: string): Observable<any> {
    const httpParams = new HttpParams()
      .set('search', search)
      .set('per_page', this.number);
    const urlRequest = 'https://free-nba.p.rapidapi.com/players';
    return this.requestService.requestNba(urlRequest, httpParams);
  }

}
