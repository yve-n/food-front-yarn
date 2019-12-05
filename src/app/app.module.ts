import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpecialityComponent } from './speciality/speciality.component';
import { RestoListComponent } from './resto-list/resto-list.component';
import { FilterPipe }from './resto-list/filter.pipe';
import { FilterSpecialityPipe }from './speciality/filter-speciality.pipe';
import { RestoListItemComponent } from './resto-list-item/resto-list-item.component';

import { RestoSerivce } from './services/resto.service';

import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";

const appRoutes: Routes =[
  { path:'resto-list/:takes', component:RestoListComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    SpecialityComponent,
    RestoListComponent,
    RestoListItemComponent,
    FilterPipe,
    FilterSpecialityPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    RestoSerivce
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
