import { RestoSerivce } from './services/resto.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'food-app';

  list_resto: any [];

  constructor(private restoService: RestoSerivce, private route:ActivatedRoute) { }

  ngOnInit() {
    this.list_resto = this.restoService.list_resto;
  }

  onGetTakeAway(){
    this.list_resto = this.restoService.list_resto2;
  }

  onGetNoTakeAway(){
    this.list_resto = this.restoService.list_resto2;
  }


  // list_resto = [
  //   {
  //     name:"Restaurant maBella",
  //     adresse:"9 Avenue du fastFood",
  //     logo:"lien_du_logo",
  //     duree_livraison:"1h",
  //   },
  //   {
  //     name:"Restaurant du Sud",
  //     adresse:"139 Rue du commerce",
  //     logo:"lien_du_logo",
  //     duree_livraison:"3h",
  //   },
  //   {
  //     name:"Viva restaurant",
  //     adresse:"28 Rue de la bienvenue",
  //     logo:"lien_du_logo",
  //     duree_livraison:"1h"
  //   }
  // ]

}
