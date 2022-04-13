import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerfulComponent } from './powerful.component';

describe('PowerfulComponent', () => {
  let component: PowerfulComponent;
  let fixture: ComponentFixture<PowerfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
