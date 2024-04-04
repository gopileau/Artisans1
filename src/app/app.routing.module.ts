import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PriceInputComponent } from './price-input/price-input.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'price', component: PriceInputComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: 'about', component: AboutComponent }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

