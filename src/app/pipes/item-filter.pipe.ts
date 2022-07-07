import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemFilter'
})
export class ItemFilterPipe implements PipeTransform {

  transform(value: any[], searchText: any): unknown {
  if (!searchText) return value
  searchText = searchText.toLowerCase();
  let filteredItems = value.filter(it => it.firstname.toLowerCase().includes(searchText) || it.lastname.toLowerCase().includes(searchText) || it.level.toLowerCase().includes(searchText) || it.email.toLowerCase().includes(searchText))
  return filteredItems
  }

}
