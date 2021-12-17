import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, prop: string): any {
    if (value.length <= 0) {
      return value
    }

    if (!value[0][prop]) {
      return
    }

    value.sort((a: any, b: any) => {
      if (a[prop] > b[prop]) {
        return 1;
      }

      if (a[prop] < b[prop]) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })
    
    return value
  }

}
