import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/common/news';
import { Subscription } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-newsitem-view',
  templateUrl: './newsitem-view.page.html',
  styleUrls: ['./newsitem-view.page.scss'],
})
export class NewsitemViewPage implements OnInit {

  newsItem: News;
  sub: Subscription;
  selectedPath = '';

  constructor(private newsService: NewsService,
              private route: ActivatedRoute,
              private router: Router) {
                this.router.events.subscribe((event: RouterEvent) => {
                  this.selectedPath = event.url;
                });
               }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.newsItem = new News();
      const id = params['id'];
      this.newsService.getNewsItemById(id).subscribe(data => {
        this.newsItem = data;
      });
    });
  }

}
