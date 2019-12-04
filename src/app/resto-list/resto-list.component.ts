import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resto-list',
  templateUrl: './resto-list.component.html',
  styleUrls: ['./resto-list.component.scss']
})
export class RestoListComponent implements OnInit {

  @Input() name: string;
  @Input() adresse: string;
  @Input() logo: string;
  @Input() duree_livraison: string;

  // @Input() list_resto;

  list_resto = [
    {
      name:"Restaurant maBella",
      adresse:"9 Avenue du fastFood",
      logo:"lien_du_logo",
      duree_livraison:"1h",
    },
    {
      name:"Restaurant du Sud",
      adresse:"139 Rue du commerce",
      logo:"lien_du_logo",
      duree_livraison:"3h",
    },
    {
      name:"Viva restaurant",
      adresse:"28 Rue de la bienvenue",
      logo:"lien_du_logo",
      duree_livraison:"1h"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
