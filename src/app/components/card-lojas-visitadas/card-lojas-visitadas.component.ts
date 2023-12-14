import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-lojas-visitadas',
  templateUrl: './card-lojas-visitadas.component.html',
  styleUrls: ['./card-lojas-visitadas.component.css']
})
export class CardLojasVisitadasComponent {
  @Input() titulo: string = 'titulo';
  @Input() txtPrincipal: string = '1.00';
  @Input() txtSecundario: string = '0,0%';
}
