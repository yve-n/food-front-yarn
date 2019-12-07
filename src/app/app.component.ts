import { Component } from '@angular/core';
import {ViewChild}  from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  
  title = 'food-app';
  lat:number =-33.785809;
  lng: number =151.121195;
}

