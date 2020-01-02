import { RestoListComponent } from './resto-list/resto-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ConnecterComponent } from './connecter/connecter.component';

import { ClientComponent } from './Client/Client.component';
import { RestaurantOwnerComponent } from './RestaurantOwner/RestaurantOwner.component';

const routes: Routes = [
  { path: '', component: MainpageComponent},
  { path: 'list-restaurant/:address', component: RestoListComponent},
  { path: 'list-restaurant/:address/:speciality', component: RestoListComponent},
  { path: 'list-restaurant/:departement/:city', component: RestoListComponent},
  {path: 'connecter', component: ConnecterComponent},
  
  {path: 'signup-client', component: ClientComponent},
  {path: 'signup-restaurantOwner', component: RestaurantOwnerComponent},
  { path: 'list-restaurant/address/:address/livraison/:livraison', component: RestoListComponent},
  { path: 'list-restaurant/address/:address/livraison/:livraison/speciality/:speciality', component: RestoListComponent},
  
  // { path: 'list-restaurant/:departement/:city', component: RestoListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
