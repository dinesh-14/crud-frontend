import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(ele => {
      // searching all fields
      return ele['name'].toLowerCase().includes(searchText) ||
        ele['email'].toLowerCase().includes(searchText) ||
        ele['roleType'].toLowerCase().includes(searchText) ||
        ele['status'].toLowerCase().includes(searchText) ||
        ele['mobile'].toLowerCase().includes(searchText);
    });
  }
}