import { Pipe, PipeTransform } from '@angular/core';

interface user {
  id: number;
  name: string;
}

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: user[], args?: any): any {
    return value.filter(val => {
      return val.name.toLowerCase().includes(args.toLowerCase());
    });
  }
}
