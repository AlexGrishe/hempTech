import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuSeedsComponent } from './side-menu-seeds.component';

describe('SideMenuSeedsComponent', () => {
  let component: SideMenuSeedsComponent;
  let fixture: ComponentFixture<SideMenuSeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuSeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuSeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
