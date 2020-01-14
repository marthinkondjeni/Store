import { Component, OnInit } from '@angular/core';
import { Product } from "../Product";
import { ProductsService } from "../products.service";
import { Carousel } from "../Carousel";
import { CarouselService } from "../carousel.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ListOfProducts: Product[];
  FeaturedProducts: Product[];
  BestSellers:Product[];
  Carousel:Carousel[]

  constructor(
    private ProductsService: ProductsService, 
    private CarouselService:CarouselService
    ) { }

  ngOnInit() {
    this.GetAllProducts();
    this.GetBestSellers();
    this.GetFeaturedProducts();
    this.GetCarousel();
  }
  GetAllProducts(){
    this.ListOfProducts =this.ProductsService.GetAllProducts();
  }
  GetFeaturedProducts(){
    this.FeaturedProducts=this.ProductsService.GetFeaturedProducts().slice(0,8);
  }
  GetBestSellers(){
    this.BestSellers =this.ProductsService.GetBestSellersProducts().slice(0,7);
  }
  GetCarousel(){
    this.Carousel=this.CarouselService.GetAllCarousel();
  }
}
