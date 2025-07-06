import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked, OnDestroy
{

  // Interview question
  // What will execute first Constructor Or ngOnInit?
  // ans: Constructor will execute first.
  constructor(){
    console.log("constructor");
  }
  ngOnInit(): void {
    // Normally we write api call function over here in ngOnInit
    console.log("ngOnInit --1");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit--2");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked--3");
  }
  ngAfterViewInit(): void {
    // this is used for ViewChild, getting reference of element
    console.log("ngAfterViewInit--4");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked--5");
  }

   ngOnDestroy(): void {
    // This will used when the user is navigating from this component you have to something that will go here.
    alert("you are leaving the component");
    console.log("ngOnDestroy-6");
  }



}
