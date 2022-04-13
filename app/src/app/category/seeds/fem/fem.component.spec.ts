import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemComponent } from './fem.component';

describe('FemComponent', () => {
  let component: FemComponent;
  let fixture: ComponentFixture<FemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
