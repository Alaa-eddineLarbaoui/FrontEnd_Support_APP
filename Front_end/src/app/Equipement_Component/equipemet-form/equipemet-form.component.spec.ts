import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipemetFormComponent } from './equipemet-form.component';

describe('EquipemetFormComponent', () => {
  let component: EquipemetFormComponent;
  let fixture: ComponentFixture<EquipemetFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipemetFormComponent]
    });
    fixture = TestBed.createComponent(EquipemetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
