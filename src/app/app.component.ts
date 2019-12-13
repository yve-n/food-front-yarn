import { RestoSerivce } from './services/resto.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ViewChild}  from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'food-app';

  list_resto: any [];

  page = "home"

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




  lat:number =-33.785809;
  lng: number =151.121195;
}

