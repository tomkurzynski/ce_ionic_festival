import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Performers } from '../common/performers';

@Injectable({
  providedIn: 'root'
})
export class PerformerService {

  private baseUrl = 'http://localhost:9090/api/performers';

  constructor(private httpClient: HttpClient) { }

  getAllPerformers(festivalId: string) {
    return this.httpClient.get<Performers[]>(this.baseUrl + '/list/' + festivalId);
  }

  getPerformerById(id: string) {
    return this.httpClient.get<Performers>(this.baseUrl + '/' + id);
  }
}
