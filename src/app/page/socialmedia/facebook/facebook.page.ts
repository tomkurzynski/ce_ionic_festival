import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FestivalService } from 'src/app/services/festival.service';
import { Festival } from 'src/app/common/festival';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.page.html',
  styleUrls: ['./facebook.page.scss'],
})
export class FacebookPage implements OnInit{

  cookieValue = '';
  festival: Festival;
  sub: Subscription;
  iframeFacebookSrc: SafeResourceUrl;
  facebookUrlPrefix = 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F';
  facebookUrlSuffix = '&tabs=timeline&width=420&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId';

  constructor(private cookieService: CookieService,
    private festivalService: FestivalService,
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer) {
    this.cookieValue = this.cookieService.get('festival-id');
  }

  ngOnInit() {
    this.sub =  this.route.params.subscribe(params => {
      this.festival = new Festival();
      this.festivalService.getFestival(this.cookieValue).subscribe(data => {
        this.festival = data;
      });
    });
  }

  sanitizeIframeFacebook() {
    if (this.festival.facebook) {

      this.iframeFacebookSrc = this.domSanitizer.
      bypassSecurityTrustResourceUrl(this.facebookUrlPrefix + this.festival.facebook + this.facebookUrlSuffix);
    }

    return this.iframeFacebookSrc;
  }


}
