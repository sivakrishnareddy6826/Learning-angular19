import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterLink } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-get-api',
  imports: [NgIf, RouterModule ],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  postEmpRoute() {

  }

userList: any[] = [];
employeeList: any[] = [];

showUsers: boolean = false;
showEmployees: boolean = false;

constructor(private http: HttpClient, private empService: EmployeeService, private route: Router) {}

getUsers() {
  this.empService.getUsersFromOpenAPI().subscribe((result: any) => {
    this.userList = result;
    this.showUsers = true;
    this.showEmployees = false;
  });
}

getEmployess() {
  this.empService.LoadEmpoyees().subscribe((result: any) => {
    this.employeeList = result;
    this.showEmployees = true;
    this.showUsers = false;
  });
}
OnEdit(data: any) {
   this.route.navigate(['post-api', data.id]);
}

OnDelete(data: any) {
  const confirmDelete = confirm(`Are you sure you want to delete employee: ${data.name}?`);

  if (confirmDelete) {
    this.http.delete(`https://localhost:7177/api/employees/${data.id}`).subscribe({
      next: () => {
        alert('Employee deleted successfully!');
        this.getEmployess();
        this.route.navigate(['/get-api']);
      },
      error: (err) => {
        console.error('Delete error:', err);
        alert('Failed to delete employee.');
      }
    });
  }
}



}
