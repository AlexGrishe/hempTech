import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitfulComponent } from './fruitful.component';

describe('FruitfulComponent', () => {
  let component: FruitfulComponent;
  let fixture: ComponentFixture<FruitfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
