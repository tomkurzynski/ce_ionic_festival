import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, RouterEvent, ActivatedRoute } from '@angular/router';
import { Performers } from 'src/app/common/performers';
import { PerformerService } from 'src/app/services/performer.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Festival } from 'src/app/common/festival';
import { FestivalService } from 'src/app/services/festival.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.page.html',
  styleUrls: ['./mainpage.page.scss'],
})
export class MainpagePage implements OnInit {

  performers: Performers[];
  performer: Performers;
  selectedPath = '';
  festival: Festival;
  cookieValue = '';

  constructor(private cookieService: CookieService,
    private router: Router,
    private performerService: PerformerService,
    private domSanitizer: DomSanitizer,
    private festivalService: FestivalService,
    private route: ActivatedRoute) {
      this.cookieValue = this.cookieService.get('festival-id');
      this.festival = new Festival();
  }

  ngOnInit() {
    this.festivalService.getFestival(this.cookieValue).subscribe(data => {
      this.festival = data;
    });

    this.route.params.subscribe(val => {
      this.cookieValue = this.cookieService.get('festival-id');

      if (!this.cookieValue) {
        this.router.navigate(['/menu/choosefestival'])
      }
      else {
        this.performerService.getAllPerformers(this.cookieValue).subscribe(data => {
          this.performers = data;
        });
      }
    });

  }

  sanitizeIframeSrc(sPhoto) {
    let sanitizedUrl;
    if (sPhoto) {

      sanitizedUrl = this.domSanitizer.
        bypassSecurityTrustResourceUrl("data:image/png;base64, " + sPhoto);
    }

    return sanitizedUrl;
  }

}
