import { Component, OnInit } from '@angular/core';
import { SharedService } from "../../shared.service";

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmployeeList: any=[];

  ModalTitle:string;

  ActivateAddEditDepComp:boolean=false;

  emp:any;

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp={
      DepartmentId:0,
      DepartmentName:""
    }
    this.ModalTitle="Add Department";
    this.ActivateAddEditDepComp=true;
  }


  editClick(item){
    this.emp=item;
    this.ModalTitle="Edit Department"
    this.ActivateAddEditDepComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteDepartment(item.DepartmentId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      });
    }
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshEmpList()
  }


  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
    });
  }

}
