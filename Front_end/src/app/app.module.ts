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
import {InterceptorService} from "./Services/interceptor.service";
import {UserFormComponent} from "./User_Component/user-form/user-form.component";
import {EquipementListComponent} from "./Equipement_Component/equipement-list/equipement-list.component";
import {EquipemetFormComponent} from "./Equipement_Component/equipemet-form/equipemet-form.component";
import { UserUpdateComponent } from './User_Component/user-update/user-update.component';
import { AddTicketsComponent } from './Ticket_Component/add-tickets/add-tickets.component';
import { UserComponent } from './user/user.component';
import { EquipementUpdateComponent } from './Equipement_Component/equipement-update/equipement-update.component';
import { EquipementComponent } from './equipement/equipement.component';
import { UpdateTicketComponent } from './Ticket_Component/update-ticket/update-ticket.component';
import { ListTicketComponent } from './Ticket_Component/list-ticket/list-ticket.component';
import { ListPanneComponent } from './Panne_Component/list-panne/list-panne.component';
import { FormPanneComponent } from './Panne_Component/form-panne/form-panne.component';
import { UpdatePanneComponent } from './Panne_Component/update-panne/update-panne.component';
import { PanneComponent } from './panne/panne.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashbordComponent,
    SignUpComponentComponent,
    LoginComponentComponent,
    UserDashbordComponent,
    TechnicianDashbordComponent,
    UserListComponent,
    UserListComponent,
    UserFormComponent,
    EquipemetFormComponent,
    EquipementListComponent,
    EquipementListComponent,
    EquipemetFormComponent,
    UserUpdateComponent,
    AddTicketsComponent,
    UserComponent,
    EquipementUpdateComponent,
    EquipementComponent,
    UpdateTicketComponent,
    ListTicketComponent,
    ListPanneComponent,
    FormPanneComponent,
    UpdatePanneComponent,
    PanneComponent
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
