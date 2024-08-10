import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { SignUpComponentComponent } from './sign-up-component/sign-up-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatAnchor, MatButton, MatButtonModule} from "@angular/material/button";
import {MatInput, MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";


import {RouterLink} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { UserComponentComponent } from './user-component/user-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashbordComponent,
    SignUpComponentComponent,
    LoginComponentComponent,
    UserComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    RouterLink,
    BrowserAnimationsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
