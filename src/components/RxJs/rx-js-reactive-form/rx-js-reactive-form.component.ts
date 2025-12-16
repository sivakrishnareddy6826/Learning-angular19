import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-rx-js-reactive-form',
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './rx-js-reactive-form.component.html',
  styleUrl: './rx-js-reactive-form.component.css',
})
export class RxJsReactiveFormComponent implements OnInit {
  userForm!: FormGroup;
  passwordMismatch = false;
  searchResults: string[] = [];
  // we can create individual control as well
  searchControl: FormControl = new FormControl('');
  //in constructor initialize the form builder
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      subscribe: [false],
      email: [''],
      password: [''],
      confirmPassword: [''],
      age: [''],
    });
  }
  ngOnInit(): void {
    // you can subscribe single control
    this.userForm.controls['name'].valueChanges.subscribe((res) => {
      //debugger;
    });
    // individual form control subscribe
    this.searchControl.valueChanges.subscribe((res) => {
      //debugger;
    });
    // we can subscribe entire form
    this.userForm.valueChanges.subscribe((formValue: any) => {
      //debugger;
    });

    this.userForm.controls['password'].valueChanges.subscribe((res: any) => {
      //debugger;
      if (res != '') {
        this.userForm.controls['confirmPassword'].addValidators([
          Validators.required,
        ]);
      }
    });
  }

  onSubmit() {}
}
