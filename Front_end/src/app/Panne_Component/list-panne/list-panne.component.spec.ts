import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPanneComponent } from './list-panne.component';

describe('ListPanneComponent', () => {
  let component: ListPanneComponent;
  let fixture: ComponentFixture<ListPanneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPanneComponent]
    });
    fixture = TestBed.createComponent(ListPanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
