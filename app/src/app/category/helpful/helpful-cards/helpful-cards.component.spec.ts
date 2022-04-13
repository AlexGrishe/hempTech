import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpfulCardsComponent } from './helpful-cards.component';

describe('HelpfulCardsComponent', () => {
  let component: HelpfulCardsComponent;
  let fixture: ComponentFixture<HelpfulCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpfulCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpfulCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
