// 1) import the shared service to use the written API methods
import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';
import { MaterialDesignModule } from './../../material-design/material-design.module';
import { AddEditDeptComponent } from './../add-edit-dept/add-edit-dept.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';



@Component({
  selector: 'app-show-dept',
  templateUrl: './show-dept.component.html',
  styleUrls: ['./show-dept.component.css']
})
export class ShowDeptComponent implements OnInit {

  // 2) instantiate the shared service in the constructor
  constructor(private service: SharedService, public dialog: MatDialog) { }

  // 3) assign an empty array for now
  DepartmentList: any = [];

  // variables for the dialog
  modalTitle: string;
  activateAddEditComp: boolean = false;
  dep: any;
  designator: string;

  ngOnInit() {
    // 5) also need to call refresh method to the ng init as this is the first executed code on show-dept-component.ts
    this.refreshDepList();
  }

  // 4) write a method to refresh the department list from the API method
  // note:
  // This method is using asynchronous operation. RESEARCH MORE ABOUT THIS
  // the subscribe method makes sure to wait until the response is received from API call and
  // then only assigns a value to the department list variable

  refreshDepList() {
    this.service.getDepList()
      .subscribe((data) => (
        this.DepartmentList = data,
        console.log(this.DepartmentList)
      )
    );
  }


  // method adding department to the dialog box
  addDepartment() {
    const dialogConfig = new MatDialogConfig();
    // this dialog configuration are not in use anymore since im using a MAT_DIALOG_DEFAULT_OPTIONS in app.module.ts <-----------DOES NOT WORK !!!!
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.hasBackdrop = true;
    // dialogConfig.position = {
    //   top: '0', right: '0',
    // };
    // dialogConfig.minHeight = '250px';
    // dialogConfig.minWidth = '250px';
    dialogConfig.disableClose = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = {
      dep : {
        DepartmentId: 0,
        DepartmentName: ''
      },
      modalTitle: 'Add Department',
      activateAddEditComp: true,
      designator: 'my add department works'
    };

    const dialogRef = this.dialog.open(AddEditDeptComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog result: ${result}');
    });
  }

  editDepartment(item){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.hasBackdrop = true;

    dialogConfig.data = {
      dep : item,
      modalTitle: 'Edit Department',
      activateAddEditComp: true,
      designator: 'my edit department works'
    };

    const dialogRef = this.dialog.open(AddEditDeptComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog result: ${result}');
    });
  }
}

