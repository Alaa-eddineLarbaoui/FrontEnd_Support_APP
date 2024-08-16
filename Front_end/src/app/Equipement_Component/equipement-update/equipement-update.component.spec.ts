import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementUpdateComponent } from './equipement-update.component';

describe('EquipementUpdateComponent', () => {
  let component: EquipementUpdateComponent;
  let fixture: ComponentFixture<EquipementUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipementUpdateComponent]
    });
    fixture = TestBed.createComponent(EquipementUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
