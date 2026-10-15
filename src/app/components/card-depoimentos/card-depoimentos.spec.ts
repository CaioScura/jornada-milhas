import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDepoimentos } from './card-depoimentos';

describe('CardDepoimentos', () => {
  let component: CardDepoimentos;
  let fixture: ComponentFixture<CardDepoimentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDepoimentos],
    }).compileComponents();

    fixture = TestBed.createComponent(CardDepoimentos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
