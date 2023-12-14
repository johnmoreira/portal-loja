import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  @Input() titulo: string = 'titulo';

  public tabelaCategorias: any[] = [
    {categoria: 'Inseticidas', percentual: '100%', atingiu: true},
    {categoria: 'Repelentes', percentual: '100%', atingiu: true},
    {categoria: 'Purificadores', percentual: '100%', atingiu: true},
    {categoria: 'Banheiro', percentual: '100%', atingiu: true},
    {categoria: 'Desodizadores', percentual: '100%', atingiu: true},
    {categoria: 'Cozinha', percentual: '100%', atingiu: true},
    {categoria: 'Desinfetantes', percentual: '100%', atingiu: true},
  ]
}
