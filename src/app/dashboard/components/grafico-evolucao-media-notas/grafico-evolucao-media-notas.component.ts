import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-grafico-evolucao-media-notas',
  templateUrl: './grafico-evolucao-media-notas.component.html',
  styleUrls: ['./grafico-evolucao-media-notas.component.css']
})
export class GraficoEvolucaoMediaNotasComponent{

  Highcharts: typeof Highcharts = Highcharts;

  public dados: any[] = [
    [9.2, 9.5, 9.5, 9.4, 9.5, 10],
    [8.2, 8.3, 8.5, 8.6, 8.9, 8.8],
    [7.6, 7.4, 7.8, 7.9, 8, 8],
    [6.7, 6.8, 7, 7, 6.9, 6.8],
    [6.6, 6.8, 5.6, 5.7, 5.5, 6],
    [5, 3.2, 5, 4.6, 2.5, 4.8],
  ]

  public categorias: string[] = ['9 a 10', '8 a 9', '7 a 8', '6 a 7', '5 a 6', '0 a 5']

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
      categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      visible: false
    },
    plotOptions: {
      series: {
        stacking: 'normal',
        marker: { symbol: 'circle' },
      }
    },
    colors: ['#025ADE', '#05A51F', '#A7DCB0', '#FFC107', '#FF4860', '#000000'],

    series: [{
      name: '9 a 10',
      data: this.dados[0],
      type: 'line',
    }, {
      name: '8 a 9',
      data: [8.2, 8.3, 8.5, 8.6, 8.9, 8.8],
      type: 'line',
    }, {
      name: '7 a 8',
      data: [7.6, 7.4, 7.8, 7.9, 8, 8],
      type: 'line',
    },
    {
      name: '6 a 7',
      data: [6.7, 6.8, 7, 7, 6.9, 6.8],
      type: 'line',
    },
    {
      name: '5 a 6',
      data: [6.6, 6.8, 5.6, 5.7, 5.5, 6],
      type: 'line',
    },
    {
      name: '0 a 5',
      data: [5, 3.2, 5, 4.6, 2.5, 4.8],
      type: 'line',
    }]
  };
}
