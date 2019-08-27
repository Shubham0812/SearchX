import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule
} from "@angular/material";
import { HorizontalScrollerComponent } from './horizontal-scroller.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  exports: [HorizontalScrollerComponent]
})
export class HorizontalScrollerModule { }
