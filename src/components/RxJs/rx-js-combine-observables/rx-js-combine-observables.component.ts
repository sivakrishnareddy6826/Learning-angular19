import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  concatMap,
  exhaustMap,
  forkJoin,
  mergeMap,
  of,
  Subject,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-rx-js-combine-observables',
  imports: [ReactiveFormsModule],
  templateUrl: './rx-js-combine-observables.component.html',
  styleUrl: './rx-js-combine-observables.component.css',
})
export class RxJsCombineObservablesComponent {
  stateData$ = of(['Ap', 'Ts', 'Tn', 'Ka', 'Mp']);

  cityData$ = of(['Hyd', 'Pune', 'Bengaluru', 'chennai']);

  // create a form control
  searchControl: FormControl = new FormControl();
  onLoginClicks$ = new Subject<void>();
  constructor(private http: HttpClient) {
    // Instead of doing individual subscribing, we can subscribe both in one go by using fork join
    this.stateData$.subscribe((res) => {});
    this.stateData$.subscribe((res) => {});
    forkJoin([this.stateData$, this.cityData$]).subscribe((res: any) => {
      console.log(res); // by using fork join you can subscribe N number of observables in to one go
    });

    //switchMap Example
    // below syntax without switch map it will call when ever the value changes in the text box which is not correct
    // this.searchControl.valueChanges.subscribe((res: any) => {
    //   this.http
    //     .get('https://dummyjson.com/products/search?q=' + res)
    //     .subscribe((res: any) => {
    //       console.log(res);
    //     });
    // });

    // switch Map will cancels the previous Api call and consider the latest only
    this.searchControl.valueChanges
      .pipe(
        switchMap((search: string) =>
          this.http.get('https://dummyjson.com/products/search?q=' + search)
        )
      )
      .subscribe((res: any) => {
        console.log(res);
      });

    // merge map will consider the all the api calls and merge them into for subscription
    this.searchControl.valueChanges
      .pipe(
        mergeMap((search: string) =>
          this.http.get('https://dummyjson.com/products/search?q=' + search)
        )
      )
      .subscribe((res: any) => {
        console.log(res);
      });
    // concat map also just like merge map but it will follow the sequence for example if you search 'mobile'
    // it will concatinate each and every letter and made the sequential api call with m,mo,mob,mobi,mobil,mobile (Order matters then go for concatemap)
    this.searchControl.valueChanges
      .pipe(
        concatMap((search: string) =>
          this.http.get('https://dummyjson.com/products/search?q=' + search)
        )
      )
      .subscribe((res: any) => {
        console.log(res);
      });

    //exhaust map will prevent the duplicate api calling(use when you have to show loader when performing some action)
    this.onLoginClicks$
      .pipe(
        exhaustMap(() => {
          return this.http.get('https://jsonplaceholder.typicode.com/users');
        })
      )
      .subscribe((res: any) => {
        console.log(res);
      });
  }

  // without exhaust map api call will happpen whenever user cliks on login
  // that many times api call willl happen we need to prevent this by using exhaust map
  // onLogin() {
  //   this.http
  //     .get('https://jsonplaceholder.typicode.com/users')
  //     .subscribe((res: any) => {
  //       console.log(res);
  //     });
  // }
  onLogin() {
    this.onLoginClicks$.next();
  }
}
