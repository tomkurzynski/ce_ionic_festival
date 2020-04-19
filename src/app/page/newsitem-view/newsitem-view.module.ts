import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsitemViewPageRoutingModule } from './newsitem-view-routing.module';

import { NewsitemViewPage } from './newsitem-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsitemViewPageRoutingModule
  ],
  declarations: [NewsitemViewPage]
})
export class NewsitemViewPageModule {}
