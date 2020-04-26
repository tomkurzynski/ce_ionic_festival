import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialmediaPage } from './socialmedia.page';

const routes: Routes = [
  {
    path: '',
    component: SocialmediaPage,
    children: [
      {
        path: 'facebook',
        children: [
          {
            path: '',
            loadChildren: () => import('./facebook/facebook.module').then( m => m.FacebookPageModule)
          }
        ]
      },
      {
        path: 'twitter',
        children: [
          {
            path: '',
            loadChildren: () => import('./twitter/twitter.module').then( m => m.TwitterPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'facebook',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'facebook',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialmediaPageRoutingModule {}
