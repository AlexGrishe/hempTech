import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersCardsComponent } from './partners-cards.component';

describe('PartnersCardsComponent', () => {
  let component: PartnersCardsComponent;
  let fixture: ComponentFixture<PartnersCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnersCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
