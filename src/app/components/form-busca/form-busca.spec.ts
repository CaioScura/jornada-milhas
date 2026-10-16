import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBusca } from './form-busca';

describe('FormBusca', () => {
  let component: FormBusca;
  let fixture: ComponentFixture<FormBusca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBusca],
    }).compileComponents();

    fixture = TestBed.createComponent(FormBusca);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
