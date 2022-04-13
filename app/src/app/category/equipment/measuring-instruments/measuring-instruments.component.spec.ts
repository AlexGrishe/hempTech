import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuringInstrumentsComponent } from './measuring-instruments.component';

describe('MeasuringInstrumentsComponent', () => {
  let component: MeasuringInstrumentsComponent;
  let fixture: ComponentFixture<MeasuringInstrumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasuringInstrumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasuringInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
