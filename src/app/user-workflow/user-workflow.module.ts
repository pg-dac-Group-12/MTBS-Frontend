import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ShowsListComponent } from './shows-list/shows-list.component';
import { TicketComponent } from './ticket/ticket.component';
import { FormsModule } from '@angular/forms';
import { TicketPageComponent } from './ticket-page/ticket-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BannerComponent } from '../shared/banner/banner.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { CarouselComponent } from '../shared/carousel/carousel.component';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';
import { ShowPageComponent } from './show-page/show-page.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from '../services/HttpInterceptorService';
import { JwtInterceptor } from 'src/JwtInterceptor';



@NgModule({
  declarations: [HomepageComponent , UserDashboardComponent, MovieListComponent, ShowsListComponent, TicketComponent,
     TicketPageComponent, ShowPageComponent],
  imports: [
    CommonModule , FormsModule , SharedModule, NgbModalModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi:true
  }]
})

export class UserWorkflowModule { }
