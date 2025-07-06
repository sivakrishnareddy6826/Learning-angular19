import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NaPipePipe } from '../../Custom-pipe/na-pipe.pipe';
import { ProgressBarComponent } from "../../reusable/progress-bar/progress-bar.component";

@Component({
  selector: 'app-ngFor',
  imports: [CommonModule, NaPipePipe, ProgressBarComponent],
  templateUrl: './ngFor.component.html',
  styleUrls: ['./ngFor.component.css']
})
export class NgForComponent {

  name:string = 'siva-angular Learning'

  randomObj: any ={
    name:'Siva',
    city: 'Nandyal',
    mobile: '123456789',
    salary: 33760
  };

  cityList: string[] = ["Hyderabad", "Bengaluru","Chennai","Pune","Remote"];

  employeeArray: any[] = [
    {empId:121,empName:"Siva",city:"Hyderabad",attendance:40},
    {empId:122,empName:"",city:"Bangalore",attendance:25},
    {empId:123,empName:"Reddy",city:"Chennai",attendance:75},
    {empId:143,empName: null,city:"Chennai",attendance:60},
    {empId:100,empName: "SivRaj",city:"Akpbpl",attendance:100},
  ]
}
