import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Descargas } from './descargas';

describe('Descargas', () => {
  let component: Descargas;
  let fixture: ComponentFixture<Descargas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Descargas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Descargas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
