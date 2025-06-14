import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {


      userForm: FormGroup = new FormGroup({
    fName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    lName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    userName: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required]),
    isAgree: new FormControl(false, [Validators.requiredTrue]),
  });

  onUserSaveForm() {
    console.log(this.userForm.value);
    debugger;
  }
}
