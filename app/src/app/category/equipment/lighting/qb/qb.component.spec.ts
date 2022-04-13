import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QbComponent } from './qb.component';

describe('QbComponent', () => {
  let component: QbComponent;
  let fixture: ComponentFixture<QbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
