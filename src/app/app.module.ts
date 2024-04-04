import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SortByPricePipe } from './sort-by-price.pipe';
import { FilterByNamePipe } from './filter-by-name.pipe'; 
import { PriceInputComponent } from './price-input/price-input.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SortByPricePipe,
    FilterByNamePipe,
    PriceInputComponent,
    AboutComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule, 
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

