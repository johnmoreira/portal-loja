import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import { ProgressColorDirective } from './progress-color.directive';



@NgModule({
  declarations: [
  
    ProgressColorDirective,
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
  ]
})
export class SharedModule { }
