import { Component, OnInit } from '@angular/core';
import { Foodvendor } from 'src/app/common/foodvendor';
import { CookieService } from 'ngx-cookie-service';
import { FoodvendorService } from 'src/app/services/foodvendor.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-foodvendors',
  templateUrl: './foodvendors.page.html',
  styleUrls: ['./foodvendors.page.scss'],
})
export class FoodvendorsPage implements OnInit {

  foodVendors: Foodvendor[];
  // foodVendor: Foodvendor;

  constructor(private cookieService: CookieService,
              private foodvendorService: FoodvendorService,
              private domSanitizer: DomSanitizer) { }

  private cookieValue = this.cookieService.get('festival-id');  

  ngOnInit() {
    this.foodvendorService.getFoodVendors(this.cookieValue).subscribe(data => {
      this.foodVendors = data;
    });
  }

  sanitizeIframeSrc(image) {
    let sanitizedUrl;
    if (image) {
      sanitizedUrl = this.domSanitizer.
      bypassSecurityTrustResourceUrl("data:image/png;base64, " + image);
    }
    return sanitizedUrl;
  }

}
