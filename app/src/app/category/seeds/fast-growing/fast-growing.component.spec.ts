import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastGrowingComponent } from './fast-growing.component';

describe('FastGrowingComponent', () => {
  let component: FastGrowingComponent;
  let fixture: ComponentFixture<FastGrowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastGrowingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastGrowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
