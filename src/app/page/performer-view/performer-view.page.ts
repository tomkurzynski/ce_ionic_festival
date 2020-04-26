import { Component, OnInit } from '@angular/core';
import { Performers } from 'src/app/common/performers';
import { Subscription } from 'rxjs';
import { PerformerService } from 'src/app/services/performer.service';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-performer-view',
  templateUrl: './performer-view.page.html',
  styleUrls: ['./performer-view.page.scss'],
})
export class PerformerViewPage implements OnInit {

  performer: Performers;
  sub: Subscription;
  selectedPath = '';
  cookieValue = '';
  iframeSpotifySrc: SafeResourceUrl;
  spotifyUrl = 'https://open.spotify.com/embed/artist/';


  constructor(private performerService: PerformerService,
              private route: ActivatedRoute,
              private router: Router,
              private domSanitizer: DomSanitizer,
              private cookieService: CookieService) { 
                this.router.events.subscribe((event: RouterEvent) => {
                  this.selectedPath = event.url;
                  this.cookieValue= this.cookieService.get('festival-id');
                });
              }

  ngOnInit() {
    this.sub =  this.route.params.subscribe(params => {
      this.performer = new Performers();
      const id = params['id'];
      this.performerService.getPerformerById(id).subscribe(data => {
        this.performer = data;
      });
    });
  }

  sanitizeIframeSrc() {
    let sanitizedUrl;
    if (this.performer.photo) {

      sanitizedUrl = this.domSanitizer.
      bypassSecurityTrustResourceUrl("data:image/png;base64, " + this.performer.photo);
    }

    return sanitizedUrl;
  }

  sanitizeIframeSpotify() {
    if (this.performer.spotify) {
      this.iframeSpotifySrc = this.domSanitizer.
      bypassSecurityTrustResourceUrl(this.spotifyUrl + this.performer.spotify.substring(32, this.performer.spotify.length));
    }

    return this.iframeSpotifySrc;
  }
}
