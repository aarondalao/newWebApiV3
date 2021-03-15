import { ShowDeptComponent } from './../show-dept/show-dept.component';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-department-dialog-body',
  templateUrl: './add-department-dialog-body.component.html',
  styleUrls: ['./add-department-dialog-body.component.css']
})
export class AddDepartmentDialogBodyComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ShowDeptComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
