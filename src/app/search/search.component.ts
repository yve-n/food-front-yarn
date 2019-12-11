import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) { }

  searchForm = new FormGroup({
    adresse: new FormControl(''),
  });

  ngOnInit() {
  }

  onSubmit(){
    this.router.navigate(['list-restaurant/'+this.searchForm.value['address']]);
  }

}
