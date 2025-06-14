import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-api',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {
  empForm: FormGroup;
  isEditMode: boolean = false;
  employeeId: number | null = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.empForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      position: new FormControl('', [Validators.required]),
      salary: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      department: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.employeeId = +id;
        this.loadEmployeeById(this.employeeId);
      }
    });
  }

  loadEmployeeById(id: number) {
    this.http.get(`https://localhost:7177/api/employees/${id}`).subscribe({
      next: (res: any) => {
        this.empForm.patchValue(res);
      },
      error: (err) => {
        console.error("Error fetching employee:", err);
      }
    });
  }

  onEmpSaveForm() {
    if (this.empForm.valid) {
      //const empData = this.empForm.value;
      //id: this.employeeId
      const empData = {
      ...this.empForm.value,id: this.employeeId
      };

      if (this.isEditMode && this.employeeId !== null) {
        this.http.put(`https://localhost:7177/api/employees/${this.employeeId}`, empData).subscribe({
          next: () => {
            alert("Employee updated successfully!");
            this.router.navigate(['/get-api']);
          },
          error: (err) => {
            console.error("Update error:", err);
            alert("Failed to update employee.");
          }
        });
      } else {
        this.http.post("https://localhost:7177/api/employees", empData).subscribe({
          next: () => {
            alert("Employee created successfully!");
            this.empForm.reset();
            this.router.navigate(['/get-api']);
          },
          error: (err) => {
            console.error("Create error:", err);
            alert("Failed to create employee.");
          }
        });
      }
    } else {
      this.empForm.markAllAsTouched();
    }
  }
}
