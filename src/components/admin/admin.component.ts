import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [RouterLink]
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
