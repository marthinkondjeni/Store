import { Injectable } from '@angular/core';

import { Product } from "./Product";
import { ListOfProducts } from "./ListOfProducts";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  GetAllProducts():Product[]{
    return ListOfProducts;
  }
  GetBestSellersProducts():Product[]{
    return ListOfProducts.filter(c=>c.Section.includes("BestSellers"));
  }
  GetFeaturedProducts():Product[]{
    return ListOfProducts.filter(c=>c.Section.includes("FeaturedProducts"));
  }
  GetProduct(id:number):Product{
    return ListOfProducts.find(x=>x._id==id);
  }
}
