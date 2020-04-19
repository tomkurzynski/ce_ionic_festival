import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoosefestivalPageRoutingModule } from './choosefestival-routing.module';

import { ChoosefestivalPage } from './choosefestival.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoosefestivalPageRoutingModule
  ],
  declarations: [ChoosefestivalPage]
})
export class ChoosefestivalPageModule {}
