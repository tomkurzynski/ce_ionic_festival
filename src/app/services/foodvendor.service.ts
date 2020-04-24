import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Foodvendor } from '../common/foodvendor';

@Injectable({
  providedIn: 'root'
})
export class FoodvendorService {

  private baseUrl = 'http://localhost:9090/api/foods';

  constructor(private httpClient: HttpClient) { }

  getFoodVendors(festivalId: string) {
    return this.httpClient.get<Foodvendor[]>(this.baseUrl + '/list/' + festivalId);
  }

  getFoodVendor(id: string) {
    return this.httpClient.get<Foodvendor>(this.baseUrl + '/' + id);
  }
}
