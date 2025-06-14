import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  openLinkedIn() {
    window.open('https://www.linkedin.com/in/siva-krishna-reddy-kamireddy-241465231/')
  }

}
