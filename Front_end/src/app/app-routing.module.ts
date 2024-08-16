import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminDashbordComponent} from "./DASHBORD-COMPONENT/admin-dashbord/admin-dashbord.component";
import {LoginComponentComponent} from "./login-component/login-component.component";
import {UserDashbordComponent} from "./DASHBORD-COMPONENT/user-dashbord/user-dashbord.component";
import {TechnicianDashbordComponent} from "./DASHBORD-COMPONENT/technician-dashbord/technician-dashbord.component";
import {UserUpdateComponent} from "./User_Component/user-update/user-update.component";
import {UserComponent} from "./user/user.component";
import {EquipementComponent} from "./equipement/equipement.component";
import {EquipementUpdateComponent} from "./Equipement_Component/equipement-update/equipement-update.component";
import {AddTicketsComponent} from "./Ticket_Component/add-tickets/add-tickets.component";
import {PanneComponent} from "./panne/panne.component";

const routes: Routes = [
  {  path: '',component:LoginComponentComponent },
  {  path: 'admin',
    component:AdminDashbordComponent,
    children:[
      { path : 'userc', component:UserComponent},
      { path : 'equipement' , component:EquipementComponent},
      { path : 'panne' , component:PanneComponent}

    ] },

  {  path: '',component:LoginComponentComponent },
  {  path: 'user',
    component:UserDashbordComponent,
    children:[
      {  path:'add-ticket', component:AddTicketsComponent},
    ] },


  {  path:'user', component:UserDashbordComponent},
  {  path:'technicien', component:TechnicianDashbordComponent},
  {  path:'updateUser/:id', component:UserUpdateComponent},
  {  path:'updateEquip/:id', component:EquipementUpdateComponent},






];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
