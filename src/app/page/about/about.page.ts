import { Component, OnInit } from '@angular/core';
import { Festival } from 'src/app/common/festival';
import { FestivalService } from 'src/app/services/festival.service';
import { CookieService } from 'ngx-cookie-service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  festival: Festival;
  cookieValue = '';

  constructor(private festivalService: FestivalService,
              private cookieService: CookieService,
              private domSanitizer: DomSanitizer) { 
                this.festival = new Festival();
                this.cookieValue = cookieService.get('festival-id');
              }

  ngOnInit() {
    this.festivalService.getFestival(this.cookieValue).subscribe(data => {
      this.festival = data;
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
