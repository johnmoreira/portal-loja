import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-grafico-evolucao-media-notas',
  templateUrl: './grafico-evolucao-media-notas.component.html',
  styleUrls: ['./grafico-evolucao-media-notas.component.css']
})
export class GraficoEvolucaoMediaNotasComponent {
  Highcharts: typeof Highcharts = Highcharts;

  private dados: any[] = [{
    name: '9 a 10',
    data: [5, 6, 5, 4, 5, 6],
    type: 'line',
    color: '#025ADE',
    marker: {symbol: 'circle'}
  }, {
    name: '8 a 9',
    data: [5, 6, 5, 4, 5, 6],
    type: 'line',
    color: '#05A51F',
    marker: {symbol: 'circle'}
  }, {
    name: '7 a 8',
    data: [5, 6, 5, 4, 5, 6],
    type: 'line',
    color: '#A7DCB0',
    marker: {symbol: 'circle'}
  },
  {
    name: '6 a 7',
    data: [5, 6, 5, 4, 5, 6],
    type: 'line',
    color: '#FFC107',
    marker: {symbol: 'circle'},
  },

  {
    name: '5 a 6',
    data: [5, 6, 5, 4, 5, 6],
    type: 'line',
    color: '#FF4860',
    marker: {symbol: 'circle'}
  },
  {
    name: '0 a 5',
    data: [5, 6, 5, 4, 5, 6],
    type: 'line',
    color: '#000000',
    marker: {symbol: 'circle'}
  },


  ]

  chartOptions: Highcharts.Options = {
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    xAxis: {
      visible: false,
      // 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      categories: [ 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      visible: false
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },


    series: this.dados
  };
}
