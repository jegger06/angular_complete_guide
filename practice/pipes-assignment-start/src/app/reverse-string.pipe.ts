import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: any): any {
    if (value.length === 0 || value === '') {
      return value;
    }

    return value.split('').reverse().join('');
  }

}
