import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Festival } from '../common/festival';

@Injectable({
  providedIn: 'root'
})
export class FestivalService {

  private baseUrl = 'http://localhost:9090/api/festivals';

  constructor(private httpClient: HttpClient) { }

  getFestival(festivalId: string) {
    return this.httpClient.get<Festival>(this.baseUrl + '/' + festivalId);
  }
}
