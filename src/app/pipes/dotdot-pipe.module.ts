import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DotDotDotPipe } from './dotdot-pipe';



@NgModule({
  declarations: [DotDotDotPipe],
  imports: [
    CommonModule
  ],
  exports: [DotDotDotPipe]
})
export class DotdotPipeModule { }
