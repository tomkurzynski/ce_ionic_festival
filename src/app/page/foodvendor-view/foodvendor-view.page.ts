import { Component, OnInit } from '@angular/core';
import { Foodvendor } from 'src/app/common/foodvendor';
import { Subscription } from 'rxjs';
import { FoodvendorService } from 'src/app/services/foodvendor.service';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-foodvendor-view',
  templateUrl: './foodvendor-view.page.html',
  styleUrls: ['./foodvendor-view.page.scss'],
})
export class FoodvendorViewPage implements OnInit {

  foodVendor: Foodvendor;
  sub: Subscription;
  selectedPath = '';

  constructor(private foodVendorService: FoodvendorService,
              private route: ActivatedRoute,
              private router: Router,
              private domSanitizer: DomSanitizer) { 
                this.router.events.subscribe((event: RouterEvent) => {
                  this.selectedPath = event.url;
                });
              }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.foodVendor = new Foodvendor();
      const id = params['id'];
      this.foodVendorService.getFoodVendor(id).subscribe(data => {
        this.foodVendor = data;
      });
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
