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


}
