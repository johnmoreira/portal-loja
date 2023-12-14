import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-grafico-evolucao-media-notas',
  templateUrl: './grafico-evolucao-media-notas.component.html',
  styleUrls: ['./grafico-evolucao-media-notas.component.css']
})
export class GraficoEvolucaoMediaNotasComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    series: [{
      name: '0 a 5',
      data: [1, 2, 3],
      type: 'line'
    }]
  };
}
