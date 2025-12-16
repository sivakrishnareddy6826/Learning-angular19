import { NgFor, NgIf, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Department,
  EmployeePostRequest,
  Role,
} from '../../../models/employee.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-post-api',
  imports: [NgIf, NgFor, ReactiveFormsModule, JsonPipe],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css',
})
export class PostApiComponent {
  empForm: FormGroup;
  isEditMode: boolean = false;
  employeeId: number | null = null;
  departments: Department[] = [];
  roles: Role[] = [];

  ngOnInit() {
    //forkJoin(from rxJS) for parallel API calls
    // If any api fails it won't execute. Only error block will be executed
    forkJoin({
      departments: this.http.get<Department[]>(
        'https://localhost:7177/api/admin/department'
      ),
      roles: this.http.get<Role[]>('https://localhost:7177/api/admin/role/all'),
    }).subscribe({
      next: (res) => {
        this.departments = res.departments;
        this.roles = res.roles;
      },
      error: (err) => console.error('Error loading dropdown data:', err),
    });

    // Edit Mode
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.employeeId = +id;
        this.loadEmployeeById(this.employeeId);
      }
    });
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.empForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      position: new FormControl('', [Validators.required]),
      salary: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[0-9]*$/),
      ]),

      // Dropdown controls
      departmentId: new FormControl(null, [Validators.required]),
      roleId: new FormControl(null, [Validators.required]),
    });
  }

  // ngOnInit() {
  //   this.route.paramMap.subscribe((params) => {
  //     const id = params.get('id');
  //     if (id) {
  //       this.isEditMode = true;
  //       this.employeeId = +id;
  //       this.loadEmployeeById(this.employeeId);
  //     }
  //   });
  // }

  loadEmployeeById(id: number) {
    this.http.get(`https://localhost:7177/api/employees/${id}`).subscribe({
      next: (res: any) => {
        this.empForm.patchValue(res);
      },
      error: (err) => {
        console.error('Error fetching employee:', err);
      },
    });
  }

  onEmpSaveForm() {
    // STEP 1: If form is invalid, highlight errors and stop execution
    if (!this.empForm.valid) {
      this.empForm.markAllAsTouched();
      return; // Do not proceed with API call
    }

    // STEP 2: Prepare request payload exactly as backend expects
    // This takes all form fields: name, email, position, salary, departmentId, roleId
    const request: EmployeePostRequest = this.empForm.value;

    // STEP 3: If user is editing an employee (edit mode = true and we have employee ID)
    if (this.isEditMode && this.employeeId !== null) {
      // Send HTTP PUT request to update employee
      // PUT URL includes the employee ID
      this.http
        .put(`https://localhost:7177/api/employees/${this.employeeId}`, request)
        .subscribe({
          next: () => {
            // Show success message
            alert('Employee updated successfully!');
            // Navigate back to employee list page
            this.router.navigate(['/get-api']);
          },
          error: (err) => {
            console.error(err); // Log error for debugging
          },
        });
    } else {
      // STEP 4: If NOT edit mode → this is a NEW EMPLOYEE → send POST request
      this.http
        .post('https://localhost:7177/api/employees', request)
        .subscribe({
          next: () => {
            alert('Employee created successfully!');

            // Reset form after successful creation
            this.empForm.reset();

            // Navigate to employee list screen
            this.router.navigate(['/get-api']);
          },
          error: (err) => {
            console.error(err); // Log errors for debugging
          },
        });
    }
  }
}
