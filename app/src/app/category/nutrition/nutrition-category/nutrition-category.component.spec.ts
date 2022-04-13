import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionCategoryComponent } from './nutrition-category.component';

describe('NutritionCategoryComponent', () => {
  let component: NutritionCategoryComponent;
  let fixture: ComponentFixture<NutritionCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
