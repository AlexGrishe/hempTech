import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutofemComponent } from './autofem.component';

describe('AutofemComponent', () => {
  let component: AutofemComponent;
  let fixture: ComponentFixture<AutofemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutofemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutofemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
