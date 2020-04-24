import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsPageRoutingModule } from './news-routing.module';

import { NewsPage } from './news.page';
import { RouterModule } from '@angular/router';
import { SortByPipeModule } from 'src/app/pipes/sort-by-pipe.module';
import { DotdotPipeModule } from 'src/app/pipes/dotdot-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsPageRoutingModule,
    RouterModule,
    SortByPipeModule,
    DotdotPipeModule
  ],
  declarations: [NewsPage]
})
export class NewsPageModule {}
