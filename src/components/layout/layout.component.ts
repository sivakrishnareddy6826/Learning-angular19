import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  route = inject(Router);
  onLogOut() {
    localStorage.removeItem('token');
    this.route.navigateByUrl('log-in');
  }
}
