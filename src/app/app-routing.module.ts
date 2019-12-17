import { RestoListComponent } from './resto-list/resto-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CityComponent } from './city/city.component';
import {  RestoVilleComponent} from './resto-ville/resto-ville.component';


const routes: Routes = [
  { path: '', component: MainpageComponent},
  
  { path: 'list-restaurant/:address', component: RestoListComponent},
  { path: 'list-restaurant/:address/:speciality', component: RestoListComponent},
  { path: 'list-restaurant/:departement/:city', component: RestoListComponent},
  { path: 'livraison/:city/:city', component: CityComponent},
  { path: 'speciality/:city/:city', component: CityComponent},
  { path: 'list-restaurant/:address', component: RestoVilleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
