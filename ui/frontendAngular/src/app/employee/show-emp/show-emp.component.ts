import { MaterialDesignModule } from './../../material-design/material-design.module';
import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service: SharedService) { }

  EmployeeList: any = [];

  ngOnInit(): void {
    this.refreshEmpList();
  }


  refreshEmpList(){
    this.service.getEmpList().subscribe(data => {this.EmployeeList = data; });

  }
}
