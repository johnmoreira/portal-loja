import { Component } from '@angular/core';
import { Lista } from './lista-model';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component {
 lista: Lista[] = [
  {
    categoria: 'Inseticidas',
    porcentagem: '43%',
    atingiu: false
  },
  {
    categoria: 'Repelentes',
    porcentagem: '72%',
    atingiu: true
  },
  {
    categoria: 'Purificadores',
    porcentagem: '67%',
    atingiu: false
  },
 ]

}
