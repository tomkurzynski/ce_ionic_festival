import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwitterPage } from './twitter.page';
import { ExploreContainerModule } from 'src/app/components/explore-container/explore-container.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerModule,
    RouterModule.forChild([{ path: '', component: TwitterPage}])
  ],
  declarations: [TwitterPage]
})
export class TwitterPageModule {}
