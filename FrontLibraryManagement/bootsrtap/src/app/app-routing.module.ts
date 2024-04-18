import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetallComponent } from './companent/getall/getall.component';
import { GetbyidComponent } from './companent/getbyid/getbyid.component';
import { DeleteuserComponent } from './companent/deleteuser/deleteuser.component';
import { UpdateuserComponent } from './companent/updateuser/updateuser.component';
import { CreateComponent } from './companent/create/create.component';



const routes: Routes = [
  {path:'create',component:CreateComponent},
  {path:'getall',component:GetallComponent},
  {path:'getbyid',component:GetbyidComponent},
  {path:'delete',component:DeleteuserComponent},
  {path:'update',component:UpdateuserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
