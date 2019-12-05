import { Component, OnInit, Input } from '@angular/core';
import { RestoSerivce } from './../services/resto.service';

@Component({
  selector: 'app-speciality',
  templateUrl: './speciality.component.html',
  styleUrls: ['./speciality.component.scss']
})
export class SpecialityComponent implements OnInit {

  @Input() list_resto;

  constructor(private restoService: RestoSerivce) { }

  ngOnInit() {
    // this.list_resto = this.restoService.list_resto;
  }

  onGetTakeAway(){
    return this.list_resto;
  }

}
