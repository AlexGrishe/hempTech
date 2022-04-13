import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightingCardsComponent } from './lighting-cards.component';

describe('LightingCardsComponent', () => {
  let component: LightingCardsComponent;
  let fixture: ComponentFixture<LightingCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightingCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
