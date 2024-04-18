import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './companent/create/create.component';
import { DeleteuserComponent } from './companent/deleteuser/deleteuser.component';
import { GetallComponent } from './companent/getall/getall.component';
import { GetbyidComponent } from './companent/getbyid/getbyid.component';
import { NavbarComponent } from './companent/navbar/navbar.component';
import { UpdateuserComponent } from './companent/updateuser/updateuser.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DeleteuserComponent,
    GetallComponent,
    GetbyidComponent,
    NavbarComponent,
    UpdateuserComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
