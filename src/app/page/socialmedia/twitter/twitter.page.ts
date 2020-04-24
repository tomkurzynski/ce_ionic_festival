import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.page.html',
  styleUrls: ['./twitter.page.scss'],
})
export class TwitterPage implements AfterViewInit  {

  constructor(public navCtrl: NavController) {

  }
  ngAfterViewInit(): void {
    // @ts-ignore
    twttr.widgets.load();
}
    
}
