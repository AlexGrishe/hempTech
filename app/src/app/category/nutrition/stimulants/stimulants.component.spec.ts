import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StimulantsComponent } from './stimulants.component';

describe('StimulantsComponent', () => {
  let component: StimulantsComponent;
  let fixture: ComponentFixture<StimulantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StimulantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StimulantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
