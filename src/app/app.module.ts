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
import { CardLojaComponent } from './components/card-loja/card-loja.component';
import { CardLojasVisitadasComponent } from './components/card-lojas-visitadas/card-lojas-visitadas.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { TabelaCategoriasComponent } from './components/tabela-categorias/tabela-categorias.component';
import { LojasPorFaixaDeNotasComponent } from './components/lojas-por-faixa-de-notas/lojas-por-faixa-de-notas.component';
import { GraficoEvolucaoMediaNotasComponent } from './components/grafico-evolucao-media-notas/grafico-evolucao-media-notas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    DashboardComponent,
    Dashboard2Component,
    Dashboard3Component,
    Dashboard1Component,
    CardLojaComponent,
    CardLojasVisitadasComponent,
    CategoriasComponent,
    TabelaCategoriasComponent,
    LojasPorFaixaDeNotasComponent,
    GraficoEvolucaoMediaNotasComponent
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
