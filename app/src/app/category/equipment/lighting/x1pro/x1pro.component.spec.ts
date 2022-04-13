import { ComponentFixture, TestBed } from '@angular/core/testing';

import { X1proComponent } from './x1pro.component';

describe('X1proComponent', () => {
  let component: X1proComponent;
  let fixture: ComponentFixture<X1proComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ X1proComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(X1proComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
