import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from '../common/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private baseUrl = 'http://localhost:9090/api/news';

  constructor(private httpClient: HttpClient) { }
  
  getAllNews(festivalId: string) {
    return this.httpClient.get<News[]>(this.baseUrl + '/list/' + festivalId);
  }

  getNewsItemById(id: string) {
    return this.httpClient.get<News>(this.baseUrl + '/' + id);
  }
}
