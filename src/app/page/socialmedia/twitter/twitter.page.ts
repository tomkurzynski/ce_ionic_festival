import { AfterViewInit, Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Festival } from 'src/app/common/festival';
import { CookieService } from 'ngx-cookie-service';
import { FestivalService } from 'src/app/services/festival.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.page.html',
  styleUrls: ['./twitter.page.scss'],
})
export class TwitterPage implements OnInit, AfterViewInit  {

  cookieValue = '';
  festival: Festival;
  sub: Subscription;
  twitterUrl: String;
  twitterUrlPrefix = 'https://twitter.com/';
  twitterUrlSuffix = '?ref_src=twsrc%5Etfw';

  constructor(public navCtrl: NavController,
    private cookieService: CookieService,
    private festivalService: FestivalService,
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer
    ) {
      this.cookieValue = this.cookieService.get('festival-id');
  }

  ngOnInit() {
    this.sub =  this.route.params.subscribe(params => {
      this.festival = new Festival();
      this.festivalService.getFestival(this.cookieValue).subscribe(data => {
        this.festival = data;
      });
      this.twitterUrl = this.twitterUrlPrefix + this.festival.twitter + this.twitterUrlSuffix;
    });
  }

  sanitizeTwitterUrl(twitterUrl) {
    let url;
    if (twitterUrl) {

      url = this.domSanitizer.
      bypassSecurityTrustResourceUrl("https://twitter.com/" + twitterUrl + "?ref_src=twsrc%5Etfw");
    }
    // @ts-ignore
    // twttr.widgets.load()
    return url;
  }
  
  ngAfterViewInit(): void {
    // @ts-ignore
    setTimeout(() => twttr.widgets.load(), 500);
}
    
}
