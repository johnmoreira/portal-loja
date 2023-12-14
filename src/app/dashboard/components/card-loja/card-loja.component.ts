import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-loja',
  templateUrl: './card-loja.component.html',
  styleUrls: ['./card-loja.component.css']
})

export class CardLojaComponent {
  @Input() titulo: string = 'titulo';
  @Input() txtPrincipal: string = '1.00';
  @Input() txtSecundario: string = '0,0%';
  @Input() ordem: string = '';


  @Input() notaMes: string = '0.00';
  @Input() percentualNota: string = '0.0%';

  @Input() lojasPerfeitas: string = '0';
  @Input() lojasVisitadas: string = '0';

  @Input() percentualLojasPerfeitas: string = '0.0%';
  @Input() totalLojas: string = '0';
  @Input() percentualVisitadas: string = '0.0%';

}