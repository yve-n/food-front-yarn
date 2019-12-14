import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatExpansionModule} from '@angular/material/expansion';
import { SpecialityComponent } from './speciality/speciality.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { FilterPipe } from './list-restaurant/filter.pipe';
import { FilterSpecialityPipe } from './speciality/filter-speciality.pipe';
import { ListRestaurantItemComponent } from './list-restaurant-item/list-restaurant-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RestoSerivce } from './services/resto.service';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { BestSpecialitiesComponent } from './best-specialities/best-specialities.component';

import { MainpageComponent } from './mainpage/mainpage.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarNoHomeComponent } from './navbar-no-home/navbar-no-home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SpecialityComponent,
    ListRestaurantComponent,
    ListRestaurantItemComponent,
    FilterPipe,
    FilterSpecialityPipe,
    NavbarComponent,
    BestSpecialitiesComponent,
    MainpageComponent,
    FooterComponent,
    NavbarNoHomeComponent,
    RestaurantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    GooglePlaceModule,
    ReactiveFormsModule,
    MatExpansionModule,
    BrowserAnimationsModule,
  ],
  providers: [
    RestoSerivce
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
