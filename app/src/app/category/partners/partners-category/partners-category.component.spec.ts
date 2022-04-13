import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersCategoryComponent } from './partners-category.component';

describe('PartnersCategoryComponent', () => {
  let component: PartnersCategoryComponent;
  let fixture: ComponentFixture<PartnersCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnersCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
