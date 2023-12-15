import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  @Input() titulo: string = 'titulo';
  @Input() bg: string = '';
  @Input() assertividade: string = '75,0%';

  public tabelaCategorias: any[] = [
    {categoria: 'Inseticidas', percentual: '100%', atingiu: true},
    {categoria: 'Repelentes', percentual: '10%', atingiu: false},
    {categoria: 'Purificadores', percentual: '10%', atingiu: false},
    {categoria: 'Banheiro', percentual: '100%', atingiu: true},
    {categoria: 'Desodizadores', percentual: '10%', atingiu: false},
    {categoria: 'Cozinha', percentual: '100%', atingiu: true},
    {categoria: 'Desinfetantes', percentual: '100%', atingiu: true},
  ]
}