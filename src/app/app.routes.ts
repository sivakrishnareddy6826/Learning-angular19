import { LinkedSignalComponent } from '../components/signals/linked-signal/linked-signal.component';
import { Routes } from '@angular/router';
import { AdminComponent } from '../components/admin/admin.component';
import { UserComponent } from '../components/user/user.component';
import { DataBindingComponent } from '../components/dataBinding/dataBinding.component';
import { NgClassComponent } from '../components/attributeDirectives/ngClass/ngClass.component';
import { NgForComponent } from '../components/Directives/ngFor/ngFor.component';
import { ControlStatementsComponent } from '../components/control-statements/control-statements.component';
import { ReactiveFormComponent } from '../components/forms/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from '../components/forms/template-driven-form/template-driven-form.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo: 'data-binding',
    pathMatch: 'full'
  },
  {
    path:'admin',
    component: AdminComponent
  },
  {
    path:'user',
    component: UserComponent
  },
  {
    path: 'data-binding',
    component: DataBindingComponent
  },
  {
    path: 'ng-class',
    component: NgClassComponent
  },
  {
    path:'ng-for',
    component: NgForComponent
  },
  {
    path:'control-flow',
    component: ControlStatementsComponent
  },
  {
    path:'linked-signal',
    component:LinkedSignalComponent
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent
  },
  {
    path: 'template-driven-form',
    component: TemplateDrivenFormComponent
  }
];
