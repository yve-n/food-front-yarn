import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RestaurantComponent } from "./restaurant/restaurant.component";
import { ListRestaurantComponent } from "./list-restaurant/list-restaurant.component";
import { MainpageComponent } from "./mainpage/mainpage.component";
import { ConnecterComponent } from "./connecter/connecter.component";
import { ClientComponent } from "./Client/Client.component";
import { RestaurantOwnerComponent } from "./RestaurantOwner/RestaurantOwner.component";

const routes: Routes = [
  { path: "", component: MainpageComponent },
  { path: "connecter", component: ConnecterComponent },
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
