import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
private url:string ="./appdata/employeedata.json"
  constructor(private http:Http) { }
getEmployee(){
return  this.http.get(this.url).
  map((response:Response)=>response.json());
}

}
