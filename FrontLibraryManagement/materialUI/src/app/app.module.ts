import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './companents/create/create.component';
import { DeleteComponent } from './companents/delete/delete.component';
import { GetByIdComponent } from './companents/get-by-id/get-by-id.component';
import { GetallComponent } from './companents/getall/getall.component';
import { NavbarComponent } from './companents/navbar/navbar.component';
import { UpdatesComponent } from './companents/updates/updates.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DeleteComponent,
    GetByIdComponent,
    GetallComponent,
    NavbarComponent,
    UpdatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
