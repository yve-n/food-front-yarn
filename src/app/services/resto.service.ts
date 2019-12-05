export class RestoSerivce {

    list_resto = [
        {
          name:"Restaurant maBella",
          adresse:"9 Avenue du fastFood",
          logo:"lien_du_logo",
          duree_livraison:"1h",
          specialite : [
            "pizza",
            "burger",
            "tacos"
          ],
          takes: [
            "take_away",
          ]
        },
        {
          name:"Restaurant du Sud",
          adresse:"139 Rue du commerce",
          logo:"lien_du_logo",
          duree_livraison:"3h",
          specialite : [
            "foufou",
            "akoume",
            "riz"
          ],
          takes:[
            "no_take_away",
          ]
        },
        {
          name:"Viva restaurant",
          adresse:"28 Rue de la bienvenue",
          logo:"lien_du_logo",
          duree_livraison:"1h",
          specialite : [
            "pate",
            "igname",
            "manioc"
          ],
          takes:[
            "no_take_away",
          ]
        }
      ]

    // getAppareilByTakes(id: number) {
    //   const appareil = this.appareils.find(
    //     (s) => {
    //       return s.id === id;
    //     }
    //   );
    //   return appareil;
    // }
    
    
}