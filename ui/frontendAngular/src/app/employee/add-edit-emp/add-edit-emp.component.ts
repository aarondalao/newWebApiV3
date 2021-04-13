
import { MaterialDesignModule } from './../../material-design/material-design.module';
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
  photofilepath: string;
  departmentList: any = [];

  @Input() emp:any;

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
    this.loadDepartmentList();
  }


  // load department method gets all of the departmentlist from the department table and load
  // it into employee

  loadDepartmentList(){
    this.service.getAllDepartmentNames().subscribe((data:any) => {
      this.departmentList = data;
      this.employeeid = this.emp.employeeid;
      this.employeename = this.emp.employeename;
      this.department = this.emp.department;
      this.dateofjoining = this.emp.dateofjoining;
      this.photofilename = this.emp.photofilename;

      this.photofilepath = this.service.PhotoUrl + this.photofilename;
    });
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

  // this method is for uploading the profile picture for the employee
 uploadPhoto(event){
  var file = event.target.files[0];

  // create a formData and assign the filename and the file to it

  const formData: FormData = new FormData();
  formData.append('uploadedFile', file, file.name);

  //send the formData to API Method

  this.service.UploadPhoto(formData).subscribe((data: any) => {

    this.photofilename = data.toString();
    this.photofilepath = this.service.PhotoUrl + this.photofilename;
  });
 }

  close() {
    this.dialogRef.close();
  }
}
