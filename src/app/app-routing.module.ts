import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RestaurantComponent } from "./restaurant/restaurant.component";
import { ListRestaurantComponent } from "./list-restaurant/list-restaurant.component";
import { MainpageComponent } from "./mainpage/mainpage.component";
import { SigninComponent } from "./signin/connecter.component";
import { ClientComponent } from "./Client/Client.component";
import { RestaurantOwnerComponent } from "./RestaurantOwner/RestaurantOwner.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  { path: "home", component: MainpageComponent },
  { path: "SigninComponent", component: SigninComponent },
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
    path: "restaurant",
    component: RestaurantComponent,
    data: { title: "Detail restaurant" }
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
