import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/common/news';
import { CookieService } from 'ngx-cookie-service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  news: News[];
  private cookieValue = '';

  constructor(private cookieService: CookieService,
              private newsService: NewsService) {
                this.cookieValue = this.cookieService.get('festival-id');
               }

  
            
  ngOnInit() {
    this.newsService.getAllNews(this.cookieValue).subscribe(data => {
      this.news = data;
    });
  }
  
}
