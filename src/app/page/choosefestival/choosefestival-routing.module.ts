import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoosefestivalPage } from './choosefestival.page';

const routes: Routes = [
  {
    path: '',
    component: ChoosefestivalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoosefestivalPageRoutingModule {}
