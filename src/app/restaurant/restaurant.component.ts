import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  name: string;

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

}
