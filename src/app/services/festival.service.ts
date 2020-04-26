import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Festival } from '../common/festival';
import { Room } from '../common/room';

@Injectable({
  providedIn: 'root'
})
export class FestivalService {

  private baseUrl = 'http://localhost:9090/api/festivals/';
  private roomUrl = 'http://localhost:9090/api/stage/list/'

  constructor(private httpClient: HttpClient) { }

  getFestival(festivalId: string) {
    return this.httpClient.get<Festival>(this.baseUrl + festivalId);
  }

  getRoomByFestivalId(festivalId: string) {
    return this.httpClient.get<Room[]>(this.roomUrl + festivalId )
  }
}
