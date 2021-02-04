import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BannerComponent } from './banner/banner.component';
import { MovieComponent } from './movie/movie.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from '../services/HttpInterceptorService';
import { JwtInterceptor } from 'src/JwtInterceptor';



@NgModule({
  declarations: [NavbarComponent,CarouselComponent,BannerComponent,MovieComponent],
  imports: [
    CommonModule
  ],
  exports:[NavbarComponent,CarouselComponent,BannerComponent,MovieComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi:true
  }]
})
export class SharedModule { }
