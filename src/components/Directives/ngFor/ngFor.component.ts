import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngFor',
  imports:[CommonModule],
  templateUrl: './ngFor.component.html',
  styleUrls: ['./ngFor.component.css']
})
export class NgForComponent {

  cityList: string[] = ["Hyderabad", "Bengaluru","Chennai","Pune","Remote"];

  employeeArray: any[] = [
    {empId:121,empName:"Siva",city:"Hyderabad"},
    {empId:122,empName:"Krishna",city:"Bangalore"},
    {empId:123,empName:"Reddy",city:"Chennai"},
  ]
}
