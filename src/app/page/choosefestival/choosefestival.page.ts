import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choosefestival',
  templateUrl: './choosefestival.page.html',
  styleUrls: ['./choosefestival.page.scss'],
})
export class ChoosefestivalPage{

  festivalId: string;

  constructor(private cookieService: CookieService,
              private router: Router) { }

  submit() {
    this.cookieService.set('festival-id', this.festivalId);
    this.router.navigate(['/menu/mainpage']);
  }

}
