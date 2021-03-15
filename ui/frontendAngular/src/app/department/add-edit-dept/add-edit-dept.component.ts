import { MaterialDesignModule } from './../../material-design/material-design.module';
import { ShowDeptComponent } from './../show-dept/show-dept.component';
import { SharedService } from './../../shared.service';
import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-add-edit-dept',
  templateUrl: './add-edit-dept.component.html',
  styleUrls: ['./add-edit-dept.component.css']
})
export class AddEditDeptComponent implements OnInit {

  // variables for the dialog
  modalTitle: string;
  DepartmentId: string;
  DepartmentName: string;
  designator: string;
  @Input() dep: any;


  constructor(private dialogRef: MatDialogRef<AddEditDeptComponent>, @Inject(MAT_DIALOG_DATA) public data, private service: SharedService) {
    this.modalTitle = data.modalTitle;
    this.designator = data.designator;
  }

  ngOnInit(): void {
    this.DepartmentId = this.dep.DepartmentId;
    this.DepartmentName = this.dep.DepartmentName;
  }

  addDepartment() {
    let val = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName
    };
    this.service.addDepartment(val).subscribe(res => {
      alert(res.toString());
    })
    this.dialogRef.close();
  }

  updateDepartment() {
    let val = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName
    };
    this.service.updateDepartment(val).subscribe(res => {
      alert(res.toString());
    });
    this.dialogRef.close();
  }


  close() {
    this.dialogRef.close();
  }
}
