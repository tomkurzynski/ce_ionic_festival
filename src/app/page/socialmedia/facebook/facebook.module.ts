import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacebookPage } from './facebook.page';
import { ExploreContainerModule } from 'src/app/components/explore-container/explore-container.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ExploreContainerModule,
    RouterModule.forChild([{path: '', component: FacebookPage}])
  ],
  declarations: [FacebookPage]
})
export class FacebookPageModule {}
