import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute) { }

  searchForm = new FormGroup({
    address: new FormControl(''),
  });

  formattedAddress="";

  options ={
      componentRestrictions:{
      country:['FR']
      }
  }

  lat:number =-33.785809;
  lng: number =151.121195;

  addressFixe: string;

  livraison= "take_away";


  ngOnInit() {
  }

  public handleAddressChange(address: any) {
    console.log("handleAddressChange from search");
    this.formattedAddress=address.address_components[2].long_name;
    this.router.navigate(['list-restaurant/'+this.formattedAddress]);
    // this.router.navigate(['list-restaurant', "address",this.formattedAddress]);
    console.log("handleAddressChange from search",this.formattedAddress);
  }


}
