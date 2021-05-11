import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { DepartmentComponent } from './department/department.component'
import { EmployeeComponent } from "./employee/employee.component";
import {Routes, RouterModule} from "@angular/router";


const routers: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'department', component: DepartmentComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routers),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
