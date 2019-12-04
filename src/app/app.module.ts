import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpecialityComponent } from './speciality/speciality.component';
import { RestoListComponent } from './resto-list/resto-list.component';
import { RestoListItemComponent } from './resto-list-item/resto-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SpecialityComponent,
    RestoListComponent,
    RestoListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
