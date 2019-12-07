import { RestoSerivce } from './../services/resto.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resto-list',
  templateUrl: './resto-list.component.html',
  styleUrls: ['./resto-list.component.scss']
})
export class RestoListComponent implements OnInit {

  @Input() title: string;

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
