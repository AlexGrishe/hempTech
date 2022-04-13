import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightingCategoryComponent } from './lighting-category.component';

describe('LightingCategoryComponent', () => {
  let component: LightingCategoryComponent;
  let fixture: ComponentFixture<LightingCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightingCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightingCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
