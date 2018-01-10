import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { EmployeeService } from './employee.service';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule

  ],
  providers: [DataService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
