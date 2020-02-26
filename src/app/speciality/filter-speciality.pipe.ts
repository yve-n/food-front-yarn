import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter-speciality'
})

export class FilterSpecialityPipe implements PipeTransform {

    transform(items: any[], searchRadio: string): any[] {
        if(!items) return [];
        if(!searchRadio) return items;
        
        searchRadio = searchRadio.toLowerCase();

        return items.filter( it => {
            // for (let index = 0; index < it.specialite.length; index++) {
            //     return it.specialite[index].includes(searchText);
            // }
            
            return it.take.toLowerCase().includes(searchRadio);
            });
    }

}