import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { GetallComponent } from './getall/getall.component';
import { GetbyidComponent } from './getbyid/getbyid.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DeleteuserComponent,
    GetallComponent,
    GetbyidComponent,
    UpdateuserComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
