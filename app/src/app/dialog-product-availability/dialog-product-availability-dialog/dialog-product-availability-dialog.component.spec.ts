import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProductAvailabilityDialogComponent } from './dialog-product-availability-dialog.component';

describe('DialogProductAvailabilityDialogComponent', () => {
  let component: DialogProductAvailabilityDialogComponent;
  let fixture: ComponentFixture<DialogProductAvailabilityDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogProductAvailabilityDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProductAvailabilityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
