import { Component, OnInit, Input, Output } from '@angular/core';
import { RestoSerivce } from './../services/resto.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-speciality',
  templateUrl: './speciality.component.html',
  styleUrls: ['./speciality.component.scss']
})
export class SpecialityComponent implements OnInit {

  // @Input() list_resto: any[];
  // @Output() onGetTakeAway: EventEmitter<any> = new EventEmitter<any>();
  @Output() list_resto = new EventEmitter();

  @Input() name: string;
  @Input() adresse: string;
  @Input() logo: string;
  @Input() duree_livraison: string;
  @Input() specialite: string;
  @Input() takes: string;

  constructor(private restoService: RestoSerivce) { }

  ngOnInit() {
    // this.list_resto = this.restoService.list_resto;
  }

  list(tab){
    this.list_resto.emit(tab);
  }

  getTakeAway(){
    // this.list_resto = this.restoService.list_resto2;
    // console.log(this.restoService.list_resto2);
    // return this.restoService.list_resto2;
  }

  getNoTakeAway(){
    return null;
  }

}
