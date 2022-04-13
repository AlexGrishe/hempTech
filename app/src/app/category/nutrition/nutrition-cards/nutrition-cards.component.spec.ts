import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionCardsComponent } from './nutrition-cards.component';

describe('NutritionCardsComponent', () => {
  let component: NutritionCardsComponent;
  let fixture: ComponentFixture<NutritionCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
