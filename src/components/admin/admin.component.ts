import { Component, OnInit, } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressBarComponent } from "../reusable/progress-bar/progress-bar.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [RouterLink, ProgressBarComponent]
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
