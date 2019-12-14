import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-ville',
  templateUrl: './search-ville.component.html',
  styleUrls: ['./search-ville.component.scss']
})
export class SearchVilleComponent implements OnInit {

  constructor(private router: Router) { }
  searchForm = new FormGroup({
    adresse: new FormControl(''),
  });
  ngOnInit() {
  }
  onSubmit(){
    this.router.navigate(['list-restaurant/'+this.searchForm.value['addressville']]);
  }

}
