import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { 
      id: '1', 
      name: 'Produit 1', 
      description: 'Description du produit 1', 
      price: 10,
      imageUrl: 'url_vers_image_1.jpg'
    },
    { 
      id: '2', 
      name: 'Produit 2', 
      description: 'Description du produit 2', 
      price: 20,
      imageUrl: 'url_vers_image_2.jpg'
    }
  ];

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: string): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }
}






