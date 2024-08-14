import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminDashbordComponent} from "./DASHBORD-COMPONENT/admin-dashbord/admin-dashbord.component";
import {LoginComponentComponent} from "./login-component/login-component.component";
import {UserDashbordComponent} from "./DASHBORD-COMPONENT/user-dashbord/user-dashbord.component";
import {TechnicianDashbordComponent} from "./DASHBORD-COMPONENT/technician-dashbord/technician-dashbord.component";
import {UserFormComponent} from "./User_Component/user-form/user-form.component";
import {UserUpdateComponent} from "./User_Component/user-update/user-update.component";

const routes: Routes = [
  {  path: '',component:LoginComponentComponent },
  {  path: 'admin',component:AdminDashbordComponent  },
  {  path:'user', component:UserDashbordComponent},
  {  path:'technicien', component:TechnicianDashbordComponent},
  {  path:'updateUser/:id', component:UserUpdateComponent}




];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
