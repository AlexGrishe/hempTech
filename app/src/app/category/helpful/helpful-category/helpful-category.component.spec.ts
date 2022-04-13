import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpfulCategoryComponent } from './helpful-category.component';

describe('HelpfulCategoryComponent', () => {
  let component: HelpfulCategoryComponent;
  let fixture: ComponentFixture<HelpfulCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpfulCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpfulCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
