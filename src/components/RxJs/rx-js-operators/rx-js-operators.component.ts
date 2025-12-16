import { Component } from '@angular/core';
import { catchError, filter, from, map, of, tap } from 'rxjs';
import { Department, Employee } from '../../../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-rx-js-operators',
  imports: [JsonPipe],
  templateUrl: './rx-js-operators.component.html',
  styleUrl: './rx-js-operators.component.css',
})
export class RxJsOperatorsComponent {
  // from operator it will emit one by one value
  numList$ = from([11, 12, 13, 14, 15, 16, 18, 20]);

  // Of operator will emit hole array in one go
  numList2$ = of([10, 11, 12, 13, 14, 15, 16, 18, 19, 20]);

  deptList: Department[] = [];

  constructor(
    private http: HttpClient,
    private departmentService: DepartmentService,
    private route: Router
  ) {
    // Pipe Operator in RxJs by using this you can use anopther operator.
    // you can't use Map,  Filter,Take TakeUntil directly,
    //  you have to use them in inside the Pipe only
    this.numList$
      .pipe(filter((num) => num % 2 == 0)) // this is pipe syntax after this you can subscribe to it
      .subscribe((res: number) => {
        console.log(res);
      });
    // of operator print even numbers
    this.numList2$
      .pipe(map((result) => result.filter((m) => m % 2 == 0))) // above is pipe + map syntax(filter is from angular) now subscribe to it
      .subscribe((res: number[]) => {
        console.log(res);
      });
  }
  // tap operator you have to use before map, so that you can have original stream data.
  // you can use tap operator after map operator but tap will hold the modified data not the original stream data.
  getDepartments() {
    //debugger;
    this.departmentService
      .LoadDepartments()
      .pipe(
        // tap operator allow you to actually read the original data
        tap((res) => console.log('Departments loaded:', res)),
        catchError((err) => {
          console.error(err);
          return of([]); // return empty list on failure
        })
      )
      .subscribe((res) => {
        this.deptList = res;
      });
  }
}
