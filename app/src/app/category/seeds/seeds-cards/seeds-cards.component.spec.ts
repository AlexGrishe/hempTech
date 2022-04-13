import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedsCardsComponent } from './seeds-cards.component';

describe('SeedsCardsComponent', () => {
  let component: SeedsCardsComponent;
  let fixture: ComponentFixture<SeedsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeedsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
