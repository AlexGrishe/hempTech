import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuEquipmentComponent } from './side-menu-equipment.component';

describe('SideMenuEquipmentComponent', () => {
  let component: SideMenuEquipmentComponent;
  let fixture: ComponentFixture<SideMenuEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
