import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {
  public progress: string = '0';
  public nLojas: number = 380;
  public totalLojas: number = 2391;
  public percent: number = 0

  public faixaNotas: any[] = [
    380, 584, 599, 371, 96, 432
  ]

  constructor() {

    }

  ngOnInit(): void {
    // this.faixaNotas.forEach(progress () => {
      this.percent = (this.nLojas / this.totalLojas)* 100;
      this.progress = `${this.percent}%`

    // })
    console.log(this.progress);
    }
}
