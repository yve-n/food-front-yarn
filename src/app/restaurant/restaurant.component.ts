import { RestoSerivce } from './../services/resto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RestaurantComponent implements OnInit {

  resto: any;

  constructor(private router:Router, private route:ActivatedRoute, private restoService:RestoSerivce) { }

  ngOnInit() {
    const restaurantId = +this.route.snapshot.paramMap.get('id');
    this.getRestaurant(restaurantId);
  }

  getRestaurant(restaurantId: number){
    this.resto = this.restoService.list_resto[restaurantId];
    console.log(this.resto);
  }

  scrollTo(section) {
    document.querySelector('#' + section).scroll();
  }


}
