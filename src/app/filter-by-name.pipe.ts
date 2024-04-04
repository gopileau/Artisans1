import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './services/product.model';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {
  transform(products: Product[], searchTerm: string): Product[] {
    if (!searchTerm) {
      return products; 
    }
    searchTerm = searchTerm.toLowerCase();
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
    );
  }
}



