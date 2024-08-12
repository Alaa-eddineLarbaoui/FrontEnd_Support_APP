import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashbordComponent } from './DASHBORD-COMPONENT/admin-dashbord/admin-dashbord.component';
import { SignUpComponentComponent } from './sign-up-component/sign-up-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";


import {RouterLink} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { UserDashbordComponent } from './DASHBORD-COMPONENT/user-dashbord/user-dashbord.component';
import { TechnicianDashbordComponent } from './DASHBORD-COMPONENT/technician-dashbord/technician-dashbord.component';
import { UserListComponent } from './User_Component/user-list/user-list.component';
import { UserFormComponent } from './User_Component/user-form/user-form.component';
import {InterceptorService} from "./Services/interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    AdminDashbordComponent,
    SignUpComponentComponent,
    LoginComponentComponent,
    UserDashbordComponent,
    TechnicianDashbordComponent,
    UserListComponent,
    UserFormComponent
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
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
