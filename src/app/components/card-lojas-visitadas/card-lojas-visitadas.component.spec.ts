import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLojasVisitadasComponent } from './card-lojas-visitadas.component';

describe('CardLojasVisitadasComponent', () => {
  let component: CardLojasVisitadasComponent;
  let fixture: ComponentFixture<CardLojasVisitadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLojasVisitadasComponent]
    });
    fixture = TestBed.createComponent(CardLojasVisitadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
