import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsitemViewPage } from './newsitem-view.page';

const routes: Routes = [
  {
    path: '',
    component: NewsitemViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsitemViewPageRoutingModule {}
