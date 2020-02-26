import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resto-list-item',
  templateUrl: './list-restaurant-item.component.html',
  styleUrls: ['./list-restaurant-item.component.scss']
})
export class ListRestaurantItemComponent implements OnInit {

  @Input() name: string;
  @Input() adresse: string;
  @Input() logo: string;
  @Input() duree_livraison: string;
  @Input() specialite: string;
  @Input() takes: string;
  @Input() restaurantId: string;

  // @Input() list_resto;

  constructor() { }

  ngOnInit() {
  }

}
