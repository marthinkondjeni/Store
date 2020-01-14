import { Injectable } from '@angular/core';
import { Carousel } from "./Carousel";
import { ListOfCarousel } from "./ListOfCarousel";

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor() { }
  
  GetAllCarousel(){
    return ListOfCarousel;
  }
}
