import { Component } from '@angular/core';

@Component({
  selector: 'app-lojas-por-faixa-de-notas',
  templateUrl: './lojas-por-faixa-de-notas.component.html',
  styleUrls: ['./lojas-por-faixa-de-notas.component.css']
})
export class LojasPorFaixaDeNotasComponent {
  private lojasVisitadas: number = 2391
  private percentual: number = 0

  tabelaFaixaNotas: any[] = [
    {faixa: '0 a 5',nLojas: 380, percentual: '16%'},
    {faixa: '5 a 6',nLojas: 584, percentual: '25%'},
    {faixa: '6 a 7',nLojas: 599, percentual: '25%'},
    {faixa: '7 a 8',nLojas: 371, percentual: '15%'},
    {faixa: '8 a 9',nLojas: 96, percentual: '4%'},
    {faixa: '9 a 10',nLojas: 432, percentual: '18%'},
  ]
}
