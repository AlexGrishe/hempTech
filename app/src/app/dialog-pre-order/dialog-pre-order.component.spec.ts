import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPreOrderComponent } from './dialog-pre-order.component';

describe('DialogPreOrderComponent', () => {
  let component: DialogPreOrderComponent;
  let fixture: ComponentFixture<DialogPreOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPreOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPreOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
