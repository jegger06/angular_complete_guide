import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, sortString: string = 'name'): any {
    if (value.length === 0) {
      return value;
    }

    return value.sort((a, b) => {
      const nameA = a[sortString].toLowerCase();
      const nameB = b[sortString].toLowerCase();

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }

}
