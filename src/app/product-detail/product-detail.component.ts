import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../Product";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "../products.service";
import { Location } from "@angular/common";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() Product: Product
  constructor(
    private ProductsService: ProductsService,
    private Location: Location,
    private ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.GetProduct()
  }

  GetProduct(){
    const id =+this.ActivatedRoute.snapshot.paramMap.get('id')
    this.Product= this.ProductsService.GetProduct(id)
  }
}
