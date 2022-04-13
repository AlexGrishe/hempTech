import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPreOrderDialogComponent } from './dialog-pre-order-dialog.component';

describe('DialogPreOrderDialogComponent', () => {
  let component: DialogPreOrderDialogComponent;
  let fixture: ComponentFixture<DialogPreOrderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPreOrderDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPreOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
