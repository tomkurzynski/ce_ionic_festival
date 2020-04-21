import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, RouterEvent, ActivatedRoute } from '@angular/router';
import { Performers } from 'src/app/common/performers';
import { PerformerService } from 'src/app/services/performer.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.page.html',
  styleUrls: ['./mainpage.page.scss'],
})
export class MainpagePage implements OnInit {

  performers: Performers[];
  performer: Performers;
  selectedPath = '';

  constructor(private cookieService: CookieService,
    private router: Router,
    private performerService: PerformerService,
    private domSanitizer: DomSanitizer,
    private route: ActivatedRoute) {

    // this.router.events.subscribe((event: RouterEvent) => {
    //   this.selectedPath = event.url;
    // });



  }

  private cookieValue = this.cookieService.get('festival-id');

  ngOnInit() {

    this.route.params.subscribe(val => {
      // put the code from `ngOnInit` here

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
    // <!-- <p><img [src]="'data:image/png;base64, '+ festival.logoUrl" alt="Red dot" /> </p> -->

    let sanitizedUrl;
    if (sPhoto) {

      sanitizedUrl = this.domSanitizer.
        bypassSecurityTrustResourceUrl("data:image/png;base64, " + sPhoto);
    }

    return sanitizedUrl;
  }

}
