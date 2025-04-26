import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngClass',
  templateUrl: './ngClass.component.html',
  styleUrls: ['./ngClass.component.css'],
  imports:[CommonModule, FormsModule]
})
export class NgClassComponent {
  addDiv1Color(className: string) {
  this.div1BgColor=className;
  }

  div1BgColor: string = 'bg-success';

  isChecked: boolean=false;

  div2BgColor: string='';

}
