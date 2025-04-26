import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngIf',
  imports:[CommonModule, FormsModule],
  templateUrl: './ngIf.component.html',
  styleUrls: ['./ngIf.component.css']
})
export class NgIfComponent {

  showDirective: boolean = true;

  number1: string = '';
  number2: string = '';

    
  ShowDirectiveMsg() {
    this.showDirective = true;
  }
  HideDirective() {
  this.showDirective = false;
  }
}
