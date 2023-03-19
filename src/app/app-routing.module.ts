import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppFormComponent } from './app-form/app-form.component';
import { AutoCreateFormPageComponent } from './auto-create-form-page/auto-create-form-page.component';
import { AutoExistingFormsPageComponent } from './auto-existing-forms-page/auto-existing-forms-page.component';
import { AutoFormPageComponent } from './auto-form-page/auto-form-page.component';
import { AutoMenuPageComponent } from './auto-menu-page/auto-menu-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { PassportCreateFormPageComponent } from './passport-create-form-page/passport-create-form-page.component';
import { PassportExistingFormsPageComponent } from './passport-existing-forms-page/passport-existing-forms-page.component';
import { PassportFormPageComponent } from './passport-form-page/passport-form-page.component';
import { PassportMenuPageComponent } from './passport-menu-page/passport-menu-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'form',
    component: AppFormComponent,
  },
  {
    path: 'log-in',
    component: LogInPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'auto-menu',
    component: AutoMenuPageComponent
  },
  {
    path: 'passport-menu',
    component: PassportMenuPageComponent
  },
  {
    path: 'passport-form',
    component: PassportFormPageComponent
  },
  {
    path: 'auto-form',
    component: AutoFormPageComponent
  },
  {
    path: 'passport-existing-forms',
    component: PassportExistingFormsPageComponent
  },
  {
    path: 'auto-existing-forms',
    component: AutoExistingFormsPageComponent
  },
  {
    path: 'passport-create-form',
    component: PassportCreateFormPageComponent
  },
  {
    path: 'auto-create-form',
    component: AutoCreateFormPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
