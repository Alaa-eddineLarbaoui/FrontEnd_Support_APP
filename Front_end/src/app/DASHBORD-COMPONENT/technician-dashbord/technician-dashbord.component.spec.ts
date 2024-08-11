import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianDashbordComponent } from './technician-dashbord.component';

describe('TechnicianDashbordComponent', () => {
  let component: TechnicianDashbordComponent;
  let fixture: ComponentFixture<TechnicianDashbordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicianDashbordComponent]
    });
    fixture = TestBed.createComponent(TechnicianDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
