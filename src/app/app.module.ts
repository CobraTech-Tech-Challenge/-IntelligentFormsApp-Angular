// import { routes } from './../../node_modules/@angular/router/router.d';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCardComponent } from './form-card/form-card.component';


@NgModule({
  declarations: [
    AppComponent,
    AppFormComponent,
    AutoCreateFormPageComponent,
    AutoExistingFormsPageComponent,
    AutoFormPageComponent,
    AutoMenuPageComponent,
    HomePageComponent,
    LogInPageComponent,
    PassportCreateFormPageComponent,
    PassportExistingFormsPageComponent,
    PassportFormPageComponent,
    PassportMenuPageComponent,
    RegisterPageComponent,
    FormCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
