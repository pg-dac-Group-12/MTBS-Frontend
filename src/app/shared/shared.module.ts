import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [NavbarComponent,CarouselComponent,BannerComponent],
  imports: [
    CommonModule
  ],
  exports:[NavbarComponent,CarouselComponent,BannerComponent]
})
export class SharedModule { }
