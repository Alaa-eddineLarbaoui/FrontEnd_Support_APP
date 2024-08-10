import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminDashbordComponent} from "./admin-dashbord/admin-dashbord.component";
import {LoginComponentComponent} from "./login-component/login-component.component";
import {UserComponentComponent} from "./user-component/user-component.component";

const routes: Routes = [
  {  path: 'admin',component:AdminDashbordComponent  },
  {  path: '',component:LoginComponentComponent },
  {  path:'user', component:UserComponentComponent}

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
