import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuNutritionComponent } from './side-menu-nutrition.component';

describe('SideMenuNutritionComponent', () => {
  let component: SideMenuNutritionComponent;
  let fixture: ComponentFixture<SideMenuNutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuNutritionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
