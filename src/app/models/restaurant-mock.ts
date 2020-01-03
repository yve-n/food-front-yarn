import { Restaurant } from "./restaurant";
import { Adresses } from "./address-mock";

export const RESTAURANTS: Restaurant[] = [
  {
    id: 1,
    name: "Restaurant maBella",
    /*address: {},*/
    logo: "lien_du_logo",
    duree_livraison: "1h",
    specialite: ["pizza", "burger", "tacos"],
    takes: ["take_away"]
  },
  {
    id: 2,
    name: "Restaurant du Sud",
    adresse: "139 Rue du commerce",
    logo: "lien_du_logo",
    duree_livraison: "3h",
    specialite: ["foufou", "akoume", "riz"],
    takes: ["no_take_away"]
  },
  {
    id: 3,
    name: "Viva restaurant",
    adresse: "28 Rue de la bienvenue",
    logo: "lien_du_logo",
    duree_livraison: "1h",
    specialite: ["pate", "igname", "manioc"],
    takes: ["no_take_away"]
  },
  {
    id: 4,
    name: "Food time",
    adresse: "28 Rue du ventre",
    logo: "lien_du_logo",
    duree_livraison: "1h",
    takes: "take_away"
  },
  {
    id: 5,
    name: "Paris by night",
    adresse: "275 Avenue des chinchards",
    logo: "lien_du_logo",
    duree_livraison: "2h",
    takes: "take_away"
  },
  {
    id: 6,
    name: "Pizza mood",
    address: Address,
    logo: "lien_du_logo",
    duree_livraison: "4h",
    takes: "take_away"
  }
];
