import { Component, OnInit } from '@angular/core';
import { ProgressBarComponent } from "../reusable/progress-bar/progress-bar.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [ProgressBarComponent]
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
