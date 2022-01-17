import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {

    if (!value || !value.length) {
      return value;
    }
    return value.split('').reverse().join('');
  }
}
