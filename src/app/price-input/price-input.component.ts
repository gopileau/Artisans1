import { Component } from '@angular/core';

@Component({
  selector: 'app-price-input',
  templateUrl: './price-input.component.html',
  styleUrls: ['./price-input.component.css']
})
export class PriceInputComponent {
  prices: { price: string }[] = [ 
    { price: "10€" },
    { price: "20€" },
  ];

  sortBy: string = 'desc';
}





