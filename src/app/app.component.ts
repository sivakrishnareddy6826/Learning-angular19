import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from "../components/admin/admin.component";
import { UserComponent } from "../components/user/user.component";
import { DataBindingComponent } from "../components/dataBinding/dataBinding.component";
import { NgIfComponent } from "../components/Directives/ngIf/ngIf.component";
import { NgForComponent } from "../components/Directives/ngFor/ngFor.component";
import { NgClassComponent } from "../components/attributeDirectives/ngClass/ngClass.component";
import { NgStyleComponent } from "../components/attributeDirectives/ngStyle/ngStyle.component";

@Component({
  selector: 'app-root',
  imports: [AdminComponent, UserComponent, DataBindingComponent, NgIfComponent, NgForComponent, NgClassComponent, NgStyleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19tutorial';
}
