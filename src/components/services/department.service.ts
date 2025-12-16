import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  apiUrl: string = 'https://localhost:7177/api/admin/department';
  constructor(private http: HttpClient) {}

  LoadDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl);
  }
}
