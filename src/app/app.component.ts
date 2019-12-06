import { RestoSerivce } from './services/resto.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'food-app';

  list_resto: any [];

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

  formattedAddress=" ";

  options ={
      componentRestrictions:{

      country:['FR']
      }


  }

  public handleAddressChange(address: any) {
    this.formattedAddress=address.formatted_address;
  }

}
