import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { InputsModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { SpecialityComponent } from './speciality/speciality.component';
import { RestoListComponent } from './resto-list/resto-list.component';
import { FilterPipe }from './resto-list/filter.pipe';
import { FilterSpecialityPipe }from './speciality/filter-speciality.pipe';
import { RestoListItemComponent } from './resto-list-item/resto-list-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RestoSerivce } from './services/resto.service';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { BestSpecialitiesComponent } from './best-specialities/best-specialities.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SpecialityComponent,
    RestoListComponent,
    RestoListItemComponent,
    FilterPipe,
    FilterSpecialityPipe,
    NavbarComponent,
    BestSpecialitiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    InputsModule,
    WavesModule,
    ButtonsModule,
    FormsModule,
    GooglePlaceModule,
  ],
  providers: [
    RestoSerivce
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
