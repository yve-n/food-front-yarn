import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CityComponent } from "./city/city.component";
import { RestoVilleComponent } from "./resto-ville/resto-ville.component";
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { ListRestaurantComponent } from "./list-restaurant/list-restaurant.component";
import { MainpageComponent } from "./mainpage/mainpage.component";
import { SigninComponent } from "./signin/signin.component";
import { ClientComponent } from "./client/client.component";
import { RestaurantOwnerComponent } from "./restaurantOwner/restaurantOwner.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  { path: "home", component: MainpageComponent },
  { path: "signin", component: SigninComponent },
  { path: "signup-client", component: ClientComponent },
  { path: "signup-restaurantOwner", component: RestaurantOwnerComponent },
  // { path: 'list-restaurant/:departement/:city', component: RestoListComponent},
  { path: "list-restaurant/:address", component: ListRestaurantComponent },
  {
    path: "list-restaurant/address/:address/livraison/:livraison",
    component: ListRestaurantComponent
  },
  {
    path:
      "list-restaurant/address/:address/livraison/:livraison/speciality/:speciality",
    component: ListRestaurantComponent
  },
  {
    path: "restaurant/:id",
    component: RestaurantComponent,
    data: { title: "Detail restaurant" }
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  { path: "livraison/:city/:city", component: CityComponent },
  { path: "speciality/:city/:city", component: CityComponent },
  { path: "list-restaurant/:address", component: RestoVilleComponent },
  { path: "page-not-found", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/page-not-found" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true,
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        useHash: true,
        onSameUrlNavigation: "reload",
      } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
