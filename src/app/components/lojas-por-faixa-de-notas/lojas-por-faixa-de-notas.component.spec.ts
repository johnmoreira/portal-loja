import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojasPorFaixaDeNotasComponent } from './lojas-por-faixa-de-notas.component';

describe('LojasPorFaixaDeNotasComponent', () => {
  let component: LojasPorFaixaDeNotasComponent;
  let fixture: ComponentFixture<LojasPorFaixaDeNotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LojasPorFaixaDeNotasComponent]
    });
    fixture = TestBed.createComponent(LojasPorFaixaDeNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
