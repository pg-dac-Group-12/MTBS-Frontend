import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BannerComponent } from './banner/banner.component';
import { MovieComponent } from './movie/movie.component';



@NgModule({
  declarations: [NavbarComponent,CarouselComponent,BannerComponent,MovieComponent],
  imports: [
    CommonModule
  ],
  exports:[NavbarComponent,CarouselComponent,BannerComponent,MovieComponent]
})
export class SharedModule { }
