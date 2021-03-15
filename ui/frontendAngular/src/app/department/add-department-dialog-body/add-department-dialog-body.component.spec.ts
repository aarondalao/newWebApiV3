import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepartmentDialogBodyComponent } from './add-department-dialog-body.component';

describe('AddDepartmentDialogBodyComponent', () => {
  let component: AddDepartmentDialogBodyComponent;
  let fixture: ComponentFixture<AddDepartmentDialogBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDepartmentDialogBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDepartmentDialogBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
