import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../services/product.service';

@Component({
  selector: 'productList-comp',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products:Product[];
  
  constructor(@Inject("productService")productService:any) 
  {
      this.products = productService.getProducts();
  }

  ngOnInit(): void {
  }

}
