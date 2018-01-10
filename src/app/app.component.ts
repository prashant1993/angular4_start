import { Component ,OnInit } from '@angular/core';
import { DataService } from './data.service';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:`{{title}}
  <h1 [class]="titleClass">hello</h1>

  <ul>
  <p [ngStyle]="newcol">City visited</p>
  <li *ngFor="let arr of city">{{arr}}</li>
  </ul>


<input type="text" [(ngModel)]="fname">
<input type="text" [(ngModel)]="lname">
fullname:{{fname}}{{lname}}
<ul *ngFor="let emp of employee">
<li>{{emp.name}}</li>
</ul>  `,
  styles:[`
    .red-title {
    color:red;
    }
  `],
  // providers:[EmployeeService]
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  public fname ;
  public lname;
  title = 'app';
  myobj={
    name:'prashant',
    age:'24',
    address:'mumbai'
  };
  city=['mumbai','pune','nashik'];
  myArr="true";
  myevent(event){
    console.log(event);
  }
titleClasses='red';
  titleClass = 'red-title';
newcol = {
  'color':'yellow',
 'font-size':'4em'
};

// constructor(private dataservice:DataService){}
constructor(private employeeservice:EmployeeService){}
// somedata:string ='';
// data:string ='';
employee=[];
ngOnInit(){
  // console.log("call the service",this.dataservice.cars);
// this.data = this.dataservice.cars;
// this.somedata = this.dataservice.myData();
// console.log("this.somedata",this.somedata);

this.employeeservice.getEmployee().
subscribe(resEmployeeData => this.employee = resEmployeeData);
}
}
