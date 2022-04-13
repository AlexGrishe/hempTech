import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuHelpfulComponent } from './side-menu-helpful.component';

describe('SideMenuHelpfulComponent', () => {
  let component: SideMenuHelpfulComponent;
  let fixture: ComponentFixture<SideMenuHelpfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuHelpfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuHelpfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
