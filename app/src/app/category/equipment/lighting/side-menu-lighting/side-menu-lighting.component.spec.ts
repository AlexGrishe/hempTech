import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuLightingComponent } from './side-menu-lighting.component';

describe('SideMenuLightingComponent', () => {
  let component: SideMenuLightingComponent;
  let fixture: ComponentFixture<SideMenuLightingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuLightingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuLightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
