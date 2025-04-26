import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngStyle',
  templateUrl: './ngStyle.component.html',
  styleUrls: ['./ngStyle.component.css'],
  imports:[CommonModule]
})
export class NgStyleComponent {

addDiv1BgColor(className: string) {
this.div1BgColor=className;
}

  div1BgColor:string='';  

}
