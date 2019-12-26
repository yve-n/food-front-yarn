import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { MatExpansionModule } from "@angular/material/expansion";

import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { SpecialityComponent } from "./speciality/speciality.component";
import { ListRestaurantComponent } from "./list-restaurant/list-restaurant.component";
import { FilterPipe } from "./list-restaurant/filter.pipe";
import { FilterSpecialityPipe } from "./speciality/filter-speciality.pipe";
import { ListRestaurantItemComponent } from "./list-restaurant-item/list-restaurant-item.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RestoSerivce } from "./services/resto.service";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { BestSpecialitiesComponent } from "./best-specialities/best-specialities.component";
import { MainpageComponent } from "./mainpage/mainpage.component";
import { FooterComponent } from "./footer/footer.component";
import { SigninComponent } from "./signin/signin.component";
import { ClientComponent } from "./client/client.component";
import { RestaurantOwnerComponent } from "./restaurantOwner/restaurantOwner.component";
import { DashboardClientComponent } from "./dashboard-client/dashboard-client.component";
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CityComponent } from "./city/city.component";
import { SearchVilleComponent } from "./search-ville/search-ville.component";
import { Navbar2Component } from "./navbar2/navbar2.component";
import { RestoVilleComponent } from "./resto-ville/resto-ville.component";

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
    SigninComponent,
    ClientComponent,
    RestaurantOwnerComponent,
    DashboardClientComponent,
    RestaurantComponent,
    PageNotFoundComponent,
    CityComponent,
    SearchVilleComponent,
    Navbar2Component,
    RestoVilleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    GooglePlaceModule,
    ReactiveFormsModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [RestoSerivce],
  bootstrap: [AppComponent]
})
export class AppModule {}
