import { Component } from '@angular/core';
import { from, interval, Observable, of, take, timer } from 'rxjs';

@Component({
  selector: 'app-rx-js-basic',
  imports: [],
  templateUrl: './rx-js-basic.component.html',
  styleUrl: './rx-js-basic.component.css',
})
export class RxJsBasicComponent {
  cityList: string[] = ['Hyderabad', 'Benagaluru', 'Pune', 'Chennai', 'Mumbai'];

  // second type of observable creation using RxJs Operators
  // 'of' operator will give data as it came(you can subscribe to entire array at a time)
  cityList$ = of(['Hyderabad', 'Benagaluru', 'Pune', 'Chennai', 'Mumbai']);

  // 'from' operator will give data one by one(it is like for each loop)
  cityList2$ = from(['Hyderabad', 'Benagaluru', 'Pune', 'Chennai', 'Mumbai']);

  //interval from observable(it will execute the time given here)
  myInterval$ = interval(1000);

  // timer will execute only one time based on the time you are giving
  myTimer$ = timer(5000);

  // Types of Observable creation
  constructor() {
    // below is subscribing for of Operator
    this.cityList$.subscribe((cityData: string[]) => {
      //  debugger;
      console.log(cityData);
    });
    // When ever you are creating a variable make sure $
    // at the end it is industry standard.
    // very basic way of creation of Observable:1
    const myObs$ = new Observable((value) => {
      value.next('This is demo of Observalble');
    });

    myObs$.subscribe((message) => {
      //debugger;
      console.log('It is from rxJS basic Observable' + message);
    });

    // below is for subscribing for from operator(data will print as one by one)
    this.cityList2$.subscribe((cityData: string) => {
      // debugger;
      console.log(cityData);
    });

    // subscribing to interval so it will execute N number of times
    // By using take/take until you can stop the interval
    this.myInterval$.pipe(take(10)).subscribe((res: number) => {
      console.log('interval time' + res);
      if (res == 9) {
        console.log(
          'I have used take(10) so it will stop the interval once it reaches 0 to 9'
        );
      }
    });

    // subscribing to timer(it will execute only one time)
    this.myTimer$.subscribe((res) => {
      console.log('Timer Executed' + res);
    });
  }
}
