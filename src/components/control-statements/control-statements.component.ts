import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statements',
  imports: [FormsModule],
  templateUrl: './control-statements.component.html',
  styleUrl: './control-statements.component.css'
})
export class ControlStatementsComponent {

  divVisible: boolean = false;
  isChecked: boolean = false;

  cityList: string[] = [
    'Hyderabad',
    "Bengaluru",
    "Chennai",
    "Pune",
    "Remote"
  ]
  empList: any[] = [
    {empName:"Siva Krishna Reddy",empId:'FS443',phoneNum:9493079392},
    {empName:"Kamireddy",empId:'FS123',phoneNum:3079392},
    {empName:"Siva Raj",empId:'FS143',phoneNum:12079392},
    {empName:"Evado le",empId:'None',phoneNum:91079392},
  ]

  HideShowDiv1(val: boolean) {
    this.divVisible = val;
    }
}
