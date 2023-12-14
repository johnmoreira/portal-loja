import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  public totalLojas: string = '2891';
  public lojasVisitadas: string = '2391';
  public percenutalVisitadas: string = '87.7%';
  public notaMes: string = '6.36';
  public lojasPerfeitas: string = '432';
  public percentualPerfeitas: string = '18.78%';

  cardLoja: any[] = [
    {
      titulo: 'Nota do mês atual',
      txtPrincipal: this.notaMes,
      txtSecundario: '+0,6%',
      ordem: 1
    },

    {
      titulo: 'Lojas perfeitas',
      txtPrincipal: `${this.lojasPerfeitas} de ${this.lojasVisitadas}`,
      txtSecundario: '+0,6%',
      ordem: 3
    },

    {
      titulo: 'Lojas perfeitas %',
      txtPrincipal: `${this.percentualPerfeitas} de ${this.lojasVisitadas}`,
      txtSecundario: '-0,6%',
      ordem: 4
    },
  ]

  visitadas: any = {
    titulo: 'Lojas Visitadas',
    txtPrincipal: `${this.lojasVisitadas} de ${this.totalLojas}`,
    txtSecundario: this.percenutalVisitadas,
    ordem: 2
  }



  categorias: string[] = [
    'MIX', 'SHARE', 'MATERIAL', 'CROSS MERCHANDISING', 'PREÇO'
  ]
}
