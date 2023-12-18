import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-loja',
  templateUrl: './card-loja.component.html',
  styleUrls: ['./card-loja.component.css']
})

export class CardLojaComponent {
  @Input() titulo: string = 'titulo';
  @Input() txtSecundario: string = '0,0%';

  @Input() notaMes: number = 0;
  @Input() lojasPerfeitas: number = 0;
  @Input() lojasVisitadas: number = 0;
  @Input() totalLojas: number = 0;
  @Input() meta: number = 0;


  @Input() percentualNota: number = 0;
  @Input() percentualPerfeitas: number = 0;
  @Input() percentualVisitadas: number = 0;

  @Input() progresso: number = 0;

  public progressColor(): string {
    if (this.progresso >= this.meta) {
      return '#05A51F'
    } else
      return '#FFC107'
  }
}