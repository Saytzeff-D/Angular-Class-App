import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    console.log(args)
    if (value * 5 !== NaN) {
      return value * Number(args[0]);
    }
    else{
      return value
    }
  }

}
