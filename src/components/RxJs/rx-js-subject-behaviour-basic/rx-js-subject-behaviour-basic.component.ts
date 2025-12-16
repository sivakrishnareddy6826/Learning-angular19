import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Employee } from '../../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';
import { JsonPipe, UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rx-js-subject-behaviour-basic',
  imports: [FormsModule, JsonPipe, UpperCasePipe],
  templateUrl: './rx-js-subject-behaviour-basic.component.html',
  styleUrl: './rx-js-subject-behaviour-basic.component.css',
})
export class RxJsSubjectBehaviourBasicComponent implements OnInit {
  // Subject is also another form of observable.
  // It is just a wrapper of observable
  //Note:
  // in case of subject you can not initialize the value while creating subject.
  // Ex: studentSubject$ = new Subject(); // creating subject
  //     rollNum$ = new Subject<number>();
  //     takeTill$ = new Subject<void>();
  //     courseName : Subject<string> = new Subject<string>();
  //     studentSubject$ = new Subject("new student"); // it will give error because you cannot inialize subject directly
  // In case of Behavior subject you can initialize the value
  // Ex: rollNum$ = new BehaviourSubject(123)
  studentSubject$ = new Subject(); // creating subject
  rollNum$ = new Subject<number>();
  takeTill$ = new Subject<void>();
  courseName$: Subject<string> = new Subject<string>();

  //behaviour subject examples
  courseLearning$ = new BehaviorSubject(
    'First time initialized value: Angular Learning by Learning partner channel'
  );
  empId: number = 0;
  empData: any;
  empArratData: any[] = [];
  constructor(private empService: EmployeeService, private route: Router) {
    setTimeout(() => {
      this.studentSubject$.next('This is Angular Course, Learning RxJs'); // by using next operator you can initialize the subject
      this.rollNum$.next(1729);
      this.takeTill$.next();
      this.courseName$.next('this RxJs tutorial of Subject');
      this.courseLearning$.next(
        'Learning RxJs with Angular by Learning partner Youtube channel'
      );
    }, 2000);
  }
  // subscribe to subject in ngOnInit
  ngOnInit(): void {
    this.studentSubject$.subscribe((res: any) => {
      console.log(res);
    });

    this.rollNum$.subscribe((res: any) => {
      console.log(res);
    });
    this.takeTill$.subscribe((res: any) => {
      console.log(res);
    });
    this.courseName$.subscribe((res: any) => {
      console.log(res);
    });

    // subscribe to behaviourSubject(which will take default value while initializing)
    this.courseLearning$.subscribe((res: any) => {
      //debugger;
      console.log('This is from behaviour subject' + res);
      //alert(res);
    });
  }
  getEmployeeData() {
    this.empService.getEmployeeById(this.empId).subscribe((res: Employee) => {
      //debugger;
      this.empData = res;
    });
  }

  OnEdit(id: number) {
    this.route.navigate(['post-api', id]);
  }
}
