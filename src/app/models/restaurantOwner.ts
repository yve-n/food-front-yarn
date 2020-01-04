import { Account } from "./account";

export class RestaurantOwner extends Account {
  town : string;
  address : string;
  restaurantName : string;
  specialities : string;
  postalCode : string;
  livreurs : string;
  delivery : string;
}
