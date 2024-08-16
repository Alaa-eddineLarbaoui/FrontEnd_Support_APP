import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPanneComponent } from './form-panne.component';

describe('FormPanneComponent', () => {
  let component: FormPanneComponent;
  let fixture: ComponentFixture<FormPanneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPanneComponent]
    });
    fixture = TestBed.createComponent(FormPanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
