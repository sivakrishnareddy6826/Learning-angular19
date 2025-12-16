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
import { GetApiComponent } from '../components/API/get-api/get-api.component';
import { PostApiComponent } from '../components/API/post-api/post-api.component';
import { AboutComponent } from '../components/About/about/about.component';
import { ResourceApiComponent } from '../components/API/resource-api/resource-api.component';
import { LifecycleComponent } from '../components/lifecycle/lifecycle.component';
import { RxJsBasicComponent } from '../components/RxJs/rx-js-basic/rx-js-basic.component';
import { RxJsOperatorsComponent } from '../components/RxJs/rx-js-operators/rx-js-operators.component';
import { RxJsSubjectBehaviourBasicComponent } from '../components/RxJs/rx-js-subject-behaviour-basic/rx-js-subject-behaviour-basic.component';
import { RxJsCombineObservablesComponent } from '../components/RxJs/rx-js-combine-observables/rx-js-combine-observables.component';
import { RxJsReactiveFormComponent } from '../components/RxJs/rx-js-reactive-form/rx-js-reactive-form.component';
import { UnsubscribeComponent } from '../components/RxJs/unsubscribe/unsubscribe.component';
import { LoginComponent } from '../components/API/login/login.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full',
  },
  {
    path: 'log-in',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard], // auth guard will allow only user logged in and token should be available
    children: [
      {
        path: 'admin',
        component: AdminComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'data-binding',
        component: DataBindingComponent,
      },
      {
        path: 'ng-class',
        component: NgClassComponent,
      },
      {
        path: 'ng-for',
        component: NgForComponent,
      },
      {
        path: 'control-flow',
        component: ControlStatementsComponent,
      },
      {
        path: 'linked-signal',
        component: LinkedSignalComponent,
      },
      {
        path: 'reactive-form',
        component: ReactiveFormComponent,
      },
      {
        path: 'template-driven-form',
        component: TemplateDrivenFormComponent,
      },
      {
        path: 'get-api',
        component: GetApiComponent,
      },
      {
        path: 'post-api',
        component: PostApiComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'post-api/:id',
        component: PostApiComponent,
      },
      {
        path: 'resource-api',
        component: ResourceApiComponent,
      },
      {
        path: 'life-cycle',
        component: LifecycleComponent,
      },
      {
        path: 'rx-js-basic',
        component: RxJsBasicComponent,
      },
      {
        path: 'rx-js-operator',
        component: RxJsOperatorsComponent,
      },
      {
        path: 'rx-js-subject',
        component: RxJsSubjectBehaviourBasicComponent,
      },
      {
        path: 'rx-js-combine',
        component: RxJsCombineObservablesComponent,
      },
      {
        path: 'rx-js-reactive-form',
        component: RxJsReactiveFormComponent,
      },
      {
        path: 'rx-js-unsubscribe',
        component: UnsubscribeComponent,
      },
    ],
  },
];
