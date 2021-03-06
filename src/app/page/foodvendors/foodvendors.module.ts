import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodvendorsPageRoutingModule } from './foodvendors-routing.module';

import { FoodvendorsPage } from './foodvendors.page';
import { RouterModule } from '@angular/router';
import { SortByPipeModule } from 'src/app/pipes/sort-by-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodvendorsPageRoutingModule,
    RouterModule,
    SortByPipeModule
  ],
  declarations: [FoodvendorsPage]
})
export class FoodvendorsPageModule {}
