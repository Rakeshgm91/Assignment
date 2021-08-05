import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
    getProducts() : Product[] {
        return products;
    }
}

export class Product {
    Name: string;
    Price: string;
    Category: string;
    stocked: boolean;
}

let products: Product[] = [
    {
        Category: "Sporting Goods",
        Name: "Football",
        Price: "$49.99",
        stocked:true
    }, 
    {
        Category: "Sporting Goods",
        Name: "Baseball",
        Price: "$9.99",
        stocked:true
    }, 
    {
        Category: "Sporting Goods",
        Name: "Basketball",
        Price: "$29.99",
        stocked:false
    }, 
    {
        Category: "Electronics",
        Name: "iPod Touch",
        Price: "$99.99",
        stocked:true
    }, 
    {
        Category: "Electronics",
        Name: "iPhone 5",
        Price: "$399.99",
        stocked:true
    }, 
    {
        Category: "Electronics",
        Name: "Nexus 7",
        Price: "$199.99",
        stocked:false
    }];
