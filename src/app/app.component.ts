import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'food-app';

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
