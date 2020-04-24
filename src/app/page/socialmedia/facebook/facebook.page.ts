import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FestivalService } from 'src/app/services/festival.service';
import { Festival } from 'src/app/common/festival';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.page.html',
  styleUrls: ['./facebook.page.scss'],
})
export class FacebookPage implements OnInit{

  cookieValue = '';
  festival: Festival;
  fb: String;
  sub: Subscription;

  constructor(private cookieService: CookieService,
    private festivalService: FestivalService,
    private route: ActivatedRoute) {
    this.cookieValue = this.cookieService.get('festival-id')
  }

  ngOnInit() {
    this.sub =  this.route.params.subscribe(params => {
      this.festival = new Festival();
      this.festivalService.getFestival(this.cookieValue).subscribe(data => {
        this.festival = data;
      });
    });
  }

  loadFb() {
    this.fb = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F" + this.festival.facebook + "&tabs=timeline&width=420&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId";
  }


}
