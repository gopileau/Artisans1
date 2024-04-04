import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {
  transform(value: any[], order: string): any[] {
    if (!value || !value.length || !order) {
      return value; 
    }

    return value.slice().sort((a, b) => {
      const priceA = parseFloat(a.price.replace('€', '')); 
      const priceB = parseFloat(b.price.replace('€', '')); 

      if (order === 'asc') {
        return priceA - priceB; 
      } else if (order === 'desc') {
        return priceB - priceA; 
      } else {
        return 0; 
      }
    });
  }
}

