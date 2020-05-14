import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipe'
})
export class SortPipePipe implements PipeTransform {

  transform(arr: any, sortBy: any, sortOn: any): any {
    switch (sortBy) {
      case 'asc':
        return arr.sort((a, b) => (a[sortOn] > b[sortOn]) ? 1 : -1);
      case 'desc':
        return arr.sort((a, b) => (a[sortOn] < b[sortOn]) ? 1 : -1);
    }

  }

}
