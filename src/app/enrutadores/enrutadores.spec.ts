import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enrutadores } from './enrutadores';

describe('Enrutadores', () => {
  let component: Enrutadores;
  let fixture: ComponentFixture<Enrutadores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Enrutadores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Enrutadores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
