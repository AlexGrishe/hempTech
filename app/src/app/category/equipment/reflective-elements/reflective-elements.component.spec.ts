import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectiveElementsComponent } from './reflective-elements.component';

describe('ReflectiveElementsComponent', () => {
  let component: ReflectiveElementsComponent;
  let fixture: ComponentFixture<ReflectiveElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflectiveElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflectiveElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
