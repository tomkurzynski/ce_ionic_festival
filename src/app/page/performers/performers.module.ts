import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerformersPageRoutingModule } from './performers-routing.module';

import { PerformersPage } from './performers.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerformersPageRoutingModule,
    RouterModule
  ],
  declarations: [PerformersPage]
})
export class PerformersPageModule {}
