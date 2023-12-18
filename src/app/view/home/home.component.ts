import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  public notaMes: number = 6.36;
  public totalLojas: number = 2891;
  public lojasPerfeitas: number = 432;
  public lojasVisitadas: number = 2391;

  cardLoja: any[] = [
    {
      titulo: 'Nota do mês atual',
      notaMes: this.notaMes,
      txtSecundario: '+0,6%',
      progresso: (this.notaMes/10) *100,
      meta: 70
    },
    {
      titulo: 'Lojas Visitadas',
      lojasVisitadas: this.lojasVisitadas,
      totalLojas: this.totalLojas,
      percentualVisitadas: (this.lojasVisitadas / this.totalLojas) * 100,
      progresso: (this.lojasVisitadas / this.totalLojas) * 100,
      meta: 70
    },
    {
      titulo: 'Lojas perfeitas',
      lojasPerfeitas: this.lojasPerfeitas,
      lojasVisitadas: this.lojasVisitadas,
      txtSecundario: '+0,6%',
      progresso: (this.lojasPerfeitas / this.lojasVisitadas) * 100,
      meta: 10
    },
    {
      titulo: 'Lojas perfeitas %',
      percentualPerfeitas: (this.lojasPerfeitas / this.lojasVisitadas) * 100,
      lojasVisitadas: this.lojasVisitadas,
      txtSecundario: '-0,6%',
      progresso: (this.lojasPerfeitas / this.lojasVisitadas) * 100,
      meta: 10
    }
  ]

  categorias: any[] = [
    {
      titulo: 'MIX',
      bg: '#B1FBE2'
    },
    {
      titulo: 'SHARE',
      bg: '#ECBBF2'
    },
    {
      titulo: 'MATERIAL',
      bg: '#FEC3E2'
    },
    {
      titulo: 'CROSS MERCHANDISING',
      bg: '#FFC2CA'
    },
    {
      titulo: 'PREÇO',
      bg: '#54EB95'
    }
  ]
}