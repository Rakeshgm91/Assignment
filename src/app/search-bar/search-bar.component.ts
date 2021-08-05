import { Component, OnInit, Inject, Output } from '@angular/core';
import { Product } from '../services/product.service';

@Component({
  selector: 'searchbar-comp',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  
  products:Product[];
  searchText:string;
  @Output()
  checkForStockedProducts: boolean;
  constructor(@Inject("productService")productService:any) { 
    this.searchText = ""
    this.checkForStockedProducts = false;
    this.products = productService.getProducts();
  }

  ngOnInit(): void {
  }

}
