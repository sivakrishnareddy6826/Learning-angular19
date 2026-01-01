import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule, RouterLink } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { TabsComponent } from '../../reusable/tabs/tabs.component';
import { Employee } from '../../../models/employee.model';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  of,
  Subject,
  tap,
} from 'rxjs';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-api',
  imports: [NgIf, RouterModule, UpperCasePipe, FormsModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css',
})
export class GetApiComponent implements OnInit {
  // For pagination
  pageNumber = 1;
  pageSize = 6;
  totalCount = 0;
  // searching filter
  searchText = '';
  //sorting
  sortBy = 'name';
  sortDir = 'asc';
  private searchSubject = new Subject<string>();
  postEmpRoute() {}

  // @ViewChild to get the value of any element(It will work similar document.GetelementById in JavaScript)
  @ViewChild('txtInput') txtVal: ElementRef | undefined; // to get access of one element Declare and Initialize of ViewChild
  //@ViewChild(GetApiComponent) componentVal: GetApiComponent | undefined; // this is to get entire component access

  userList: any[] = [];
  employeeList: Employee[] = [];

  showUsers: boolean = false;
  showEmployees: boolean = false;
  currentTab: string = '';
  // constructor used for initialize the variables
  constructor(
    private http: HttpClient,
    private empService: EmployeeService,
    private route: Router
  ) {}
  // @view child example calling
  readInputValue() {
    debugger;
    const val = this.txtVal?.nativeElement.value;
    if (this.txtVal) {
      this.txtVal.nativeElement.style.color = 'Blue';
    }
  }
  ngOnInit(): void {
    // calling getUsers because once you load the component it will implicitly called getUsers()
    this.getUsers();

    //Without debounce → API call on every keystroke ❌
    //With debounce → clean & optimized ✅
    this.searchSubject
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(() => {
        this.pageNumber = 1;
        this.getPaginatedEmployees();
      });

    this.getPaginatedEmployees();
  }
  onSearchChange() {
    this.searchSubject.next(this.searchText);
  }
  getUsers() {
    //debugger;
    this.empService.getUsersFromOpenAPI().subscribe((result: any) => {
      this.userList = result;
      this.showUsers = true;
      this.showEmployees = false;
    });
  }
  /**
 * Use this when:
✔ You are learning and new to Rxjs
✔ API is small
✔ You don’t need extra logic
✔ You just want to fetch and display data
  getEmployess() {
    this.empService.LoadEmpoyees().subscribe({
      next: (result) => {
        this.employeeList = result;
        this.showEmployees = true;
        this.showUsers = false;
      },
      error: (err) => console.error(err),
    });
  }
*/

  /*
Use this when:
✔ You want to debug
✔ You want to handle errors gracefully
✔ You want to add transformations
✔ You want clean separation in observables
✔ Your project is growing
✔ You plan to use NgRx later
 */
  getEmployess() {
    this.empService
      .LoadEmpoyees()
      .pipe(
        tap((res) => console.log('Employees loaded:', res)),
        catchError((err) => {
          console.error(err);
          return of([]); // return empty list on failure
        })
      )
      .subscribe((res) => {
        this.employeeList = res;
        this.showEmployees = true;
        this.showUsers = false;
      });
  }

  getPaginatedEmployees() {
    this.empService
      .loadEmployeesPaginated(
        this.pageNumber,
        this.pageSize,
        this.searchText,
        this.sortBy,
        this.sortDir
      )
      .pipe(
        tap((res) => {
          this.employeeList = res.items;
          this.totalCount = res.totalCount;
          this.showEmployees = true;
          this.showUsers = false;
        }),
        catchError((err) => {
          console.error(err);
          return of(null);
        })
      )
      .subscribe();
  }

  OnEdit(data: any) {
    this.route.navigate(['post-api', data.id]);
  }
  onTabChange(tabName: string) {
    //debugger;
    this.currentTab = tabName;
  }
  nextPage() {
    if (this.pageNumber < this.totalPages) {
      this.pageNumber++;
      this.getPaginatedEmployees();
    }
  }

  prevPage() {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.getPaginatedEmployees();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.totalCount / this.pageSize);
  }

  changeSort(column: string) {
    debugger;
    if (this.sortBy === column) {
      this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortBy = column;
      this.sortDir = 'asc';
    }

    this.pageNumber = 1;
    this.getPaginatedEmployees();
  }

  //   Without debounce → API call on every keystroke ❌
  //   With debounce → clean & optimized ✅(Implemented Deounce in NgOninit)
  // onSearchChange() {
  //   this.pageNumber = 1;
  //   this.getPaginatedEmployees();
  // }

  OnDelete(data: any) {
    const confirmDelete = confirm(
      `Are you sure you want to delete employee: ${data.name}?`
    );

    if (confirmDelete) {
      this.http
        .delete(`https://localhost:7177/api/employees/${data.id}`)
        .subscribe({
          next: () => {
            alert('Employee deleted successfully!');
            this.getEmployess();
            this.route.navigate(['/get-api']);
          },
          error: (err) => {
            console.error('Delete error:', err);
            alert('Failed to delete employee.');
          },
        });
    }
  }
}
