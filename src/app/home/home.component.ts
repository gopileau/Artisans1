import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../services/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Au petit village';
  products: Product[] = [];
  filteredProducts: Product[] = []; 
  searchTerm: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
      this.filteredProducts = [...this.products];
    });
  }


  sortAscending(): void {
    this.filteredProducts.sort((a, b) => a.price - b.price);
  }


  sortDescending(): void {
    this.filteredProducts.sort((a, b) => b.price - a.price);
  }

 
  searchByName(event: Event): void {
    event.preventDefault(); 
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}





