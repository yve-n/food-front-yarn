import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

    transform(items: any[], searchText: string): any[] {
        if(!items) return [];
        if(!searchText) return items;
        
        searchText = searchText.toLowerCase();

        return items.filter( it => {
            // for (let index = 0; index < it.specialite.length; index++) {
            //     return it.specialite[index].includes(searchText);
            // }
            
            return it.name.toLowerCase().includes(searchText);
            });
    }

}