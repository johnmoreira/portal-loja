import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { NavComponent } from './view/nav/nav.component';
import { HomeComponent } from './view/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Dashboard2Component } from './components/dashboard2/dashboard2.component';
import { Dashboard3Component } from './components/dashboard3/dashboard3.component';
import { Dashboard1Component } from './components/dashboard1/dashboard1.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    DashboardComponent,
    Dashboard2Component,
    Dashboard3Component,
    Dashboard1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
