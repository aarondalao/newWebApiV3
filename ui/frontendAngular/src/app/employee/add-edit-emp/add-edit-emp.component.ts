import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { SharedService } from './../../shared.service';
import { ShowEmpComponent } from './../show-emp/show-emp.component';
import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  modalTitle: string;
  employeeid: any;
  employeename: string;
  department: string;
  dateofjoining: string;
  photofilename: string;

  @Input() dep:any;

  form: FormGroup;

  constructor(private dialogRef: MatDialogRef<ShowEmpComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              private service: SharedService,
              private fb: FormBuilder) {
    this.modalTitle = data.modalTitle;
    this.employeeid = data.employeeid;
    this.employeename = data.employeename;
    this.department = data.department;
    this.dateofjoining = data.dateofjoining;
    this.photofilename = data.photofilename;
              }

  ngOnInit(): void {
  }

  addEmployee(){
    var val = {
      employeeid: this.employeeid,
      employeename: this.employeename,
      department: this.department,
      dateofjoining: this.dateofjoining,
      photofilename: this.photofilename
    };
    this.service.addEmployee(val).subscribe(result => {
      alert(result.toString());
    });
    this.dialogRef.close();
  }

  updateEmployee() {
    var val = {
      employeeid: this.employeeid,
      employeename: this.employeename,
      department: this.department,
      dateofjoining: this.dateofjoining,
      photofilename: this.photofilename
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
