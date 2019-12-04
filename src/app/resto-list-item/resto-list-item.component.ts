import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resto-list-item',
  templateUrl: './resto-list-item.component.html',
  styleUrls: ['./resto-list-item.component.scss']
})
export class RestoListItemComponent implements OnInit {

  @Input() name: string;
  @Input() adresse: string;
  @Input() logo: string;
  @Input() duree_livraison: string;

  @Input() list_resto;

  constructor() { }

  ngOnInit() {
  }

}
