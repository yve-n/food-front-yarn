import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { InputsModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { CheckboxModule,IconsModule, CardsModule } from 'angular-bootstrap-md';
import { SpecialityComponent } from './speciality/speciality.component';
import { RestoListComponent } from './resto-list/resto-list.component';
import { FilterPipe } from './resto-list/filter.pipe';
import { FilterSpecialityPipe } from './speciality/filter-speciality.pipe';
import { RestoListItemComponent } from './resto-list-item/resto-list-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RestoSerivce } from './services/resto.service';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { BestSpecialitiesComponent } from './best-specialities/best-specialities.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FooterComponent } from './footer/footer.component';
import { ConnecterComponent } from './connecter/connecter.component';
// For MDB Angular Free

import { ClientComponent } from './Client/Client.component';
import { RestaurantOwnerComponent } from './RestaurantOwner/RestaurantOwner.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';

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
    MainpageComponent,
    FooterComponent,
    ConnecterComponent,  
    ClientComponent,
    RestaurantOwnerComponent,
    DashboardClientComponent 
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
    ReactiveFormsModule,
    CheckboxModule,
    IconsModule,
    CardsModule
  ],
  providers: [
    RestoSerivce,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
