import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/auth.guard';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { LoginComponent } from './components/login/login.component';
import { MovieComponent } from './shared/movie/movie.component';
import { TheatreRegisterComponent } from './components/theatre-register/theatre-register.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { AddAudiComponent } from './theatre-workflow/add-audi/add-audi.component';
import { TheatreDashboardComponent } from './theatre-workflow/theatre-dashboard/theatre-dashboard.component';
import { HomepageComponent } from './user-workflow/homepage/homepage.component';
import { ShowsListComponent } from './user-workflow/shows-list/shows-list.component';
import { TicketPageComponent } from './user-workflow/ticket-page/ticket-page.component';
import { TicketComponent } from './user-workflow/ticket/ticket.component';
import { UserDashboardComponent } from './user-workflow/user-dashboard/user-dashboard.component';
import { ShowPageComponent } from './user-workflow/show-page/show-page.component';
import { SeatMapComponent } from './components/seat-map/seat-map.component';
import { AddShowComponent } from './theatre-workflow/add-show/add-show.component';
import { CancelShowComponent } from './theatre-workflow/cancel-show/cancel-show.component';

const routes: Routes = [
  {path:'user',component: UserDashboardComponent },
  {path: '',component:HomepageComponent},
  {path: 'shows_list',component: ShowsListComponent },
  {path: 'shows_page',component:ShowPageComponent},
  {path: 'ticket', component: TicketComponent},
  {path: 'ticket_page', component:TicketPageComponent},
  {path: 'theatre', component: TheatreDashboardComponent},
  {path: 'add_audi', component: AddAudiComponent},
  {path: 'register_user',component:UserRegisterComponent},
  {path: 'register_theatre',component:TheatreRegisterComponent },
  {path: 'carousel',component:CarouselComponent},
  {path: 'movie',component:MovieComponent},
  {path: 'seat_map',component:SeatMapComponent},
  {path: 'add_show',component:AddShowComponent},
  {path: 'cancel_show',component:CancelShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
