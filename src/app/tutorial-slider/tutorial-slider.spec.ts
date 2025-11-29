import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialSlider } from './tutorial-slider';

describe('TutorialSlider', () => {
  let component: TutorialSlider;
  let fixture: ComponentFixture<TutorialSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialSlider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
