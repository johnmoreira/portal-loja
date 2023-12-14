import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLojaComponent } from './components/card-loja/card-loja.component';
import { CardLojasVisitadasComponent } from './components/card-lojas-visitadas/card-lojas-visitadas.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { GraficoEvolucaoMediaNotasComponent } from './components/grafico-evolucao-media-notas/grafico-evolucao-media-notas.component';
import { LojasPorFaixaDeNotasComponent } from './components/lojas-por-faixa-de-notas/lojas-por-faixa-de-notas.component';
import { TabelaCategoriasComponent } from './components/tabela-categorias/tabela-categorias.component';
import { HighchartsChartModule } from 'highcharts-angular';



@NgModule({
  declarations: [
    CardLojaComponent,
    CardLojasVisitadasComponent,
    CategoriasComponent,
    GraficoEvolucaoMediaNotasComponent,
    LojasPorFaixaDeNotasComponent,
    TabelaCategoriasComponent,
  ],
  imports: [
    CommonModule,
    HighchartsChartModule
  ],
  exports: [
    CardLojaComponent,
    CardLojasVisitadasComponent,
    CategoriasComponent,
    GraficoEvolucaoMediaNotasComponent,
    LojasPorFaixaDeNotasComponent,
    TabelaCategoriasComponent,
  ]
})
export class DashboardModule { }
