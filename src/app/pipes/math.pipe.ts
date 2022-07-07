import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'math'
})
export class MathPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if (value % 2 == 0) {
      return `${value} - even`
    }
    else{
      return `${value} - odd`
    }
  }

}
