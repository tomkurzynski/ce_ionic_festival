import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  lat: Number;
  lng: Number;

  constructor(private geolocation: Geolocation,
    private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getCurrentPosition() {
    this.geolocation.getCurrentPosition(
      {maximumAge: 1000, timeout: 5000,
       enableHighAccuracy: true }
      ).then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            //alert("r succ"+resp.coords.latitude)
            alert(JSON.stringify( resp.coords));
      
            this.lat=resp.coords.latitude
            this.lng=resp.coords.longitude
            },er=>{
              //alert("error getting location")
              alert('Can not retrieve Location')
            }).catch((error) => {
            //alert('Error getting location'+JSON.stringify(error));
            alert('Error getting location - '+JSON.stringify(error))
            });
  }


  getSanitized(sUrl) {
    // <!-- <p><img [src]="'data:image/png;base64, '+ festival.logoUrl" alt="Red dot" /> </p> -->
    
    let sanitizedUrl;
    if (sUrl) {

      sanitizedUrl = this.domSanitizer.
      bypassSecurityTrustResourceUrl(sUrl);
    }

    return sanitizedUrl;
  }

}
