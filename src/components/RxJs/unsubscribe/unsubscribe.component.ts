import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  imports: [AsyncPipe],
  templateUrl: './unsubscribe.component.html',
  styleUrl: './unsubscribe.component.css',
})
export class UnsubscribeComponent implements OnInit, OnDestroy {
  userList: any[] = [];
  http = inject(HttpClient);
  // way 1 to unsubscribe(If we have single subscribe)
  subscribtion!: Subscription;

  // Way 2 Create subscribtion array(when mutliple subscribes are there)
  subscribtionList: Subscription[] = [];

  // Way 3 or 4 using takeUntil or take, so create subject or behaviorsubject
  subTakeUntil!: Subject<void>;

  // way 5 using async pipe(No need to think unsubscribe it will do automatically)
  userList$ = new Observable<any[]>();

  // way 6 using takeUntilDestroyed() introduced in Angular 16
  //   getUsers() {
  //   this.http.get('https://jsonplaceholder.typicode.com/users')
  //     .pipe(takeUntilDestroyed())
  //     .subscribe(res => this.userList = res);
  // }
  ngOnInit(): void {
    //way 5
    this.userList$ = this.http.get<any[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
    this.getUsers();
    //this.getPosts();
  }

  // for way 1
  // getUsers() {
  //   // store it in subscribtion variable
  //   this.subscribtion = this.http
  //     .get('https://jsonplaceholder.typicode.com/users')
  //     .subscribe((res: any) => {
  //       this.userList = res;
  //     });
  // }

  // for way 2 push to array of subscription list
  // getUsers() {
  //   this.subscribtionList.push(
  //     this.http
  //       .get('https://jsonplaceholder.typicode.com/users')
  //       .subscribe((res: any) => {
  //         this.userList = res;
  //       })
  //   );
  // }

  // getPosts() {
  //   const sub = this.http
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .subscribe((res) => {});
  //   this.subscribtionList.push(sub);
  // }

  // for Way 3 using takeUntill
  // getUsers() {
  //   this.http
  //     .get('https://jsonplaceholder.typicode.com/users')
  //     .pipe(takeUntil(this.subTakeUntil))
  //     .subscribe((res: any) => {
  //       this.userList = res;
  //     });
  // }

  // way 4 using take
  getUsers() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(take(1))
      .subscribe((res: any) => {
        this.userList = res;
      });
  }
  // ngOnDestroy is life cycle event used to clear the subscribtion and let say user is navigating
  // before navigating you need to check something that kind of checks we can write in ngOnDestroy
  ngOnDestroy(): void {
    // way 1 single unscribe
    this.subscribtion.unsubscribe();

    // way 2 unsubscribe
    this.subscribtionList.forEach((sub) => {
      sub.unsubscribe();
    });

    // way 3 unsubscribe
    this.subTakeUntil.next();
  }
}
