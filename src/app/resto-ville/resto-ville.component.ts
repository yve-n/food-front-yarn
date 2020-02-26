import { Component, OnInit } from '@angular/core';
import { RestoSerivce } from './../services/resto.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resto-ville',
  templateUrl: './resto-ville.component.html',
  styleUrls: ['./resto-ville.component.scss']
})
export class RestoVilleComponent implements OnInit {

  

  // takes: [];

  list_resto: any[];
  adresse: string;

  constructor(private restoService: RestoSerivce, private route:ActivatedRoute) { }

  ngOnInit() {
    this.list_resto = this.restoService.list_resto;
    this.adresse = this.route.snapshot.params['adresse'];
  }

  onGetTakeAway(){
    this.list_resto = this.restoService.list_resto2;
    console.log(this.list_resto);
  }

  onGetNoTakeAway(){
    this.list_resto = this.restoService.list_resto3;
  }
}
