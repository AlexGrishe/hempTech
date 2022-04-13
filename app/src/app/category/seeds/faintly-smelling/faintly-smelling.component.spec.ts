import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaintlySmellingComponent } from './faintly-smelling.component';

describe('FaintlySmellingComponent', () => {
  let component: FaintlySmellingComponent;
  let fixture: ComponentFixture<FaintlySmellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaintlySmellingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaintlySmellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
