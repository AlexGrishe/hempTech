import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokingAccessoriesComponent } from './smoking-accessories.component';

describe('SmokingAccessoriesComponent', () => {
  let component: SmokingAccessoriesComponent;
  let fixture: ComponentFixture<SmokingAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmokingAccessoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmokingAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
