import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushkaComponent } from './pushka.component';

describe('PushkaComponent', () => {
  let component: PushkaComponent;
  let fixture: ComponentFixture<PushkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PushkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
