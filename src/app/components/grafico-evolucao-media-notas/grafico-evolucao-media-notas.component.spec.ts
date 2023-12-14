import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoEvolucaoMediaNotasComponent } from './grafico-evolucao-media-notas.component';

describe('GraficoEvolucaoMediaNotasComponent', () => {
  let component: GraficoEvolucaoMediaNotasComponent;
  let fixture: ComponentFixture<GraficoEvolucaoMediaNotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficoEvolucaoMediaNotasComponent]
    });
    fixture = TestBed.createComponent(GraficoEvolucaoMediaNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
