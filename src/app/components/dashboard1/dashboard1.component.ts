import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})


export class Dashboard1Component implements OnInit {
  public faixaNotas: any[] = ['0 a 5', '5 a 6', '6 a 7', '7 a 8', '8 a 9', '9 a 10'];
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    series: [{
      name: '0 a 5',
      data: [1, 2, 3],
      type: 'line'
    }]
  };
  
  constructor() {

    }

  ngOnInit(): void {
    this.faixaNotas.forEach((e) => {
      
    })
  }
}