import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Employee } from '../../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiUrl: string = 'https://localhost:7177/api/employees';
  // create a mapper
  private empDetails = new Map<number, Observable<Employee>>();
  constructor(private http: HttpClient) {}

  // Below is generic way of calling an API without observable
  // LoadEmpoyees(){
  //   return this.http.get(this.apiUrl);
  // }
  LoadEmpoyees(): Observable<Employee[]> {
    // debugger;
    return this.http.get<Employee[]>(this.apiUrl);
  }

  getUsersFromOpenAPI() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getEmployeeById(id: number): any | undefined {
    //debugger;
    if (!this.empDetails.has(id)) {
      const empDetailsObservable$ = this.http
        .get<Employee>(this.apiUrl + '/' + id)
        .pipe(shareReplay(1));
      this.empDetails.set(id, empDetailsObservable$);
    }
    return this.empDetails.get(id);
  }
  createEmpployee() {}
}
