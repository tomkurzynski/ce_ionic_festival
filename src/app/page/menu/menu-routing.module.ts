import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'performers',
        loadChildren: () => import('../performers/performers.module').then( m => m.PerformersPageModule)
      },
      {
        path: 'performer/:id',
        loadChildren: () => import('../performer-view/performer-view.module').then(m => m.PerformerViewPageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('../news/news.module').then( m => m.NewsPageModule)
      },
      {
        path: 'foodvendors',
        loadChildren: () => import('../foodvendors/foodvendors.module').then( m => m.FoodvendorsPageModule)
      },
      {
        path: 'mainpage',
        loadChildren: () => import('../mainpage/mainpage.module').then( m => m.MainpagePageModule)
      },
      {
        path: 'choosefestival',
        loadChildren: () => import('../choosefestival/choosefestival.module').then( m => m.ChoosefestivalPageModule)
      },
      {
        path: 'maps',
        loadChildren: () => import('../maps/maps.module').then( m => m.MapsPageModule)
      },
      {
        path: 'foodvendor-view',
        loadChildren: () => import('../foodvendor-view/foodvendor-view.module').then( m => m.FoodvendorViewPageModule)
      },
      {
        path: 'performer-view',
        loadChildren: () => import('../performer-view/performer-view.module').then( m => m.PerformerViewPageModule)
      },
      {
        path: 'newsitem/:id',
        loadChildren: () => import('../newsitem-view/newsitem-view.module').then( m => m.NewsitemViewPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: 'socialmedia',
        loadChildren: () => import('../socialmedia/socialmedia.module').then( m => m.SocialmediaPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/menu/mainpage'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
