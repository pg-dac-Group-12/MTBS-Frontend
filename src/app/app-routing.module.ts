import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/auth.guard';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TheatreRegisterComponent } from './components/theatre-register/theatre-register.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { AddAudiComponent } from './theatre-workflow/add-audi/add-audi.component';
import { TheatreDashboardComponent } from './theatre-workflow/theatre-dashboard/theatre-dashboard.component';
import { MovieListComponent } from './user-workflow/movie-list/movie-list.component';
import { ShowsListComponent } from './user-workflow/shows-list/shows-list.component';
import { TicketPageComponent } from './user-workflow/ticket-page/ticket-page.component';
import { TicketComponent } from './user-workflow/ticket/ticket.component';
import { UserDashboardComponent } from './user-workflow/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path: '',component:LoginComponent},
  {path:'user',component: UserDashboardComponent },
  {path: 'movie_list',component:MovieListComponent},
  {path:'shows_list',component: ShowsListComponent },
  {path: 'ticket', component: TicketComponent},
  {path: 'ticket_page', component:TicketPageComponent},
  {path: 'theatre', component: TheatreDashboardComponent},
  {path: 'add_audi', component: AddAudiComponent},
  {path: 'register_user',component:UserRegisterComponent},
  {path: 'register_theatre',component:TheatreRegisterComponent },
  {path: 'add_audi',component:AddAudiComponent},
  {path: 'navbar',component:NavbarComponent},
  {path: 'carousel',component:CarouselComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
