import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentCardsComponent } from './equipment-cards.component';

describe('EquipmentCardsComponent', () => {
  let component: EquipmentCardsComponent;
  let fixture: ComponentFixture<EquipmentCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
