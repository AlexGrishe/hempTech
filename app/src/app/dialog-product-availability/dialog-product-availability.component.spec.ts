import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProductAvailabilityComponent } from './dialog-product-availability.component';

describe('DialogProductAvailabilityComponent', () => {
  let component: DialogProductAvailabilityComponent;
  let fixture: ComponentFixture<DialogProductAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogProductAvailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProductAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
