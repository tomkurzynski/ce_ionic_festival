import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodvendorsPageRoutingModule } from './foodvendors-routing.module';

import { FoodvendorsPage } from './foodvendors.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodvendorsPageRoutingModule,
    RouterModule
  ],
  declarations: [FoodvendorsPage]
})
export class FoodvendorsPageModule {}
