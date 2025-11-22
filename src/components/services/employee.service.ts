import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiUrl: string = 'https://localhost:7177/api/employees';

  constructor(private http: HttpClient) {}

  // Below is generic way of calling an API without observable
  // LoadEmpoyees(){
  //   return this.http.get(this.apiUrl);
  // }
  LoadEmpoyees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  getUsersFromOpenAPI() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  createEmpployee() {}
}
