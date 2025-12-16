import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  currentYear = new Date().getFullYear();
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get email() {
    return this.loginForm.get('email')!;
  }
  get password() {
    return this.loginForm.get('password')!;
  }

  onLogin() {
    console.log(this.loginForm.value);
    //debugger;
    this.http
      .post(
        'https://localhost:7177/api/auth/employee/login',
        this.loginForm.value
      )
      .subscribe({
        next: (res: any) => {
          // normally res.token from API
          localStorage.setItem('token', res.token);

          this.router.navigateByUrl('get-api');
        },
        error: () => {
          alert('Invalid Login');
        },
      });
  }
}
