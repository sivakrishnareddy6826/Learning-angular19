import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   apiUrl: string = "https://localhost:7177/api/employees";

  constructor(private http: HttpClient) { }

  LoadEmpoyees(){
    return this.http.get(this.apiUrl);
  }

  getUsersFromOpenAPI(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  createEmpployee(){

  }
}
