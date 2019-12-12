import { RestoListComponent } from './resto-list/resto-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { ChooseAccountComponent } from './choose-account/choose-account.component';
import { CompteClientComponent } from './compte-client/compte-client.component';
import { CompteRestoComponent } from './compte-resto/compte-resto.component';

const routes: Routes = [
  { path: '', component: MainpageComponent},
  { path: 'list-restaurant/:address', component: RestoListComponent},
  { path: 'list-restaurant/:address/:speciality', component: RestoListComponent},
  { path: 'list-restaurant/:departement/:city', component: RestoListComponent},
  {path: 'connecter', component: ConnecterComponent},
  {path: 'sign up', component: ChooseAccountComponent},
  {path: 'sign up /:client', component: CompteClientComponent},
  {path: 'sign up /:restaurateur', component: CompteRestoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
