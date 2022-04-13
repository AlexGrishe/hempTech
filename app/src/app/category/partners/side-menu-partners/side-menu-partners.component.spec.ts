import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuPartnersComponent } from './side-menu-partners.component';

describe('SideMenuPartnersComponent', () => {
  let component: SideMenuPartnersComponent;
  let fixture: ComponentFixture<SideMenuPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
