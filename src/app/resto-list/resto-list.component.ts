import { RestoSerivce } from './../services/resto.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resto-list',
  templateUrl: './resto-list.component.html',
  styleUrls: ['./resto-list.component.scss']
})
export class RestoListComponent implements OnInit {

  // takes: [];

  list_resto: any[];

  constructor(private restoService: RestoSerivce, private route:ActivatedRoute) { }

  ngOnInit() {
    this.list_resto = this.restoService.list_resto;
  }

  onGetTakeAway(){
    this.list_resto = this.restoService.list_resto;
  }

  onGetNoTakeAway(){
    this.list_resto = this.restoService.list_resto;
  }

}
