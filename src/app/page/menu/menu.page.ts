import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Main Page',
      url: '/menu/mainpage'
    },
    {
      title: 'News', 
      url: '/menu/news'
    },
    {
      title: 'Performers',
      url: '/menu/performers'
    },
    {
      title: 'Food Lineup',
      url: '/menu/foodvendors'
    },
    {
      title: 'Directions',
      url: '/menu/maps'
    },
    {
      title: 'About',
      url: '/menu/about'
    },
    {
      title: 'Social Media',
      url: '/menu/socialmedia'
    }
  ];

  selectedPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
   }

  ngOnInit() {
  }

}
