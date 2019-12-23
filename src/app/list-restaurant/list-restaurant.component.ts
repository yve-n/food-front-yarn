import { RestoSerivce } from '../services/resto.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.scss']
})
export class ListRestaurantComponent implements OnInit {

  @Input() title: string;

  // takes: [];

  page="";

  list_resto: any[];
  address: string;
  speciality: string;
  livraison: string;

  constructor(private restoService: RestoSerivce, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.list_resto = this.restoService.list_resto;
    this.address = this.route.snapshot.params['address'];
    this.livraison = this.route.snapshot.params['livraison'];
    this.speciality = this.route.snapshot.params['speciality'];
  }

  onGetTakeAway(event: any){
    // this.list_resto = this.restoService.list_resto2;
    this.router.navigate(['list-restaurant', "address",this.address, "livraison",event, "speciality",""]);
    
  }

  onGetNoTakeAway(event: any){
    // this.list_resto = this.restoService.list_resto3;
    this.router.navigate(['list-restaurant', "address",this.address, "livraison",event, "speciality",""]);
  }

  onGetSpeciality(event: any){
    if (event==1) {
      // this.list_resto = this.restoService.list_resto3;
      this.router.navigate(['list-restaurant', "address",this.address, "livraison",this.livraison, "speciality",event]);
    } else if (event==2) {
      this.router.navigate(['list-restaurant', "address",this.address, "livraison",this.livraison, "speciality",event]);
    }else{
      this.router.navigate(['list-restaurant', "address",this.address, "livraison",this.livraison, "speciality",event]);
    }
  }

}