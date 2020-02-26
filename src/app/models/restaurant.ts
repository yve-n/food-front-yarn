import { Address } from "./address";
import { Speciality } from "./speciality";
import { RestaurantService } from "./restaurantService";

export class Restaurant {
  id: number;
  name: string;
  minPrice: string;
  duree_livraison: string;
  logo: string;
  specialities?: [Speciality];
  address?: Address;
  services?: [RestaurantService];
  constructor() {}
}
