import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponentComponent } from './sign-up-component.component';

describe('SignUpComponentComponent', () => {
  let component: SignUpComponentComponent;
  let fixture: ComponentFixture<SignUpComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpComponentComponent]
    });
    fixture = TestBed.createComponent(SignUpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
