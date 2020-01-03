import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { MatTabsModule } from "@angular/material";
import { MatListModule } from "@angular/material/list";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { MatExpansionModule } from "@angular/material/expansion";

import { AppRoutingModule } from "./app-routing.module";

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
    RestaurantComponent,
    PageNotFoundComponent,
    CityComponent,
    SearchVilleComponent,
    RestoVilleComponent,
    DashboardClientComponent
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
    MatTabsModule,
    MatListModule
  ],
  providers: [RestoSerivce],
  bootstrap: [AppComponent]
})
export class AppModule {}
