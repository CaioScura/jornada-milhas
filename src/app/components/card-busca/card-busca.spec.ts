import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBusca } from './card-busca';

describe('CardBusca', () => {
  let component: CardBusca;
  let fixture: ComponentFixture<CardBusca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBusca],
    }).compileComponents();

    fixture = TestBed.createComponent(CardBusca);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
