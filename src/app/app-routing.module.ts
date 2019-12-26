import { RestaurantComponent } from './restaurant/restaurant.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';


const routes: Routes = [
  { path: '', component: MainpageComponent},
  { path: 'list-restaurant/:address', component: ListRestaurantComponent},
  { path: 'list-restaurant/address/:address/livraison/:livraison', component: ListRestaurantComponent},
  { path: 'list-restaurant/address/:address/livraison/:livraison/speciality/:speciality', component: ListRestaurantComponent},
  { path: 'restaurant/:id', component: RestaurantComponent},
  // { path: 'restaurant/name/:name/', component: RestaurantComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
