import { Component, OnInit } from '@angular/core';
import { Performers } from 'src/app/common/performers';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { PerformerService } from 'src/app/services/performer.service';
// import { SortByPipe } from 'src/app/sort-by-pipe';

@Component({
  selector: 'app-performers',
  templateUrl: './performers.page.html',
  styleUrls: ['./performers.page.scss'],
})
export class PerformersPage implements OnInit {

  performers: Performers[];
  
  constructor(private cookieService: CookieService,
              private router: Router,
              private performerService: PerformerService) { }

  private cookieValue = this.cookieService.get('festival-id');

  ngOnInit() {
    this.performerService.getAllPerformers(this.cookieValue).subscribe(data => {
      this.performers = data;
    });
  }

}
