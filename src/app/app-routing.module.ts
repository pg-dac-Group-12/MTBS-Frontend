import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { TheatreRegisterComponent } from './components/theatre-register/theatre-register.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { AddAudiComponent } from './theatre-workflow/add-audi/add-audi.component';
<<<<<<< HEAD
import { TheatreDashboardComponent } from './theatre-workflow/theatre-dashboard/theatre-dashboard.component';
=======
>>>>>>> Added Seat Map preview
import { MovieListComponent } from './user-workflow/movie-list/movie-list.component';
import { ShowsListComponent } from './user-workflow/shows-list/shows-list.component';
import { TicketComponent } from './user-workflow/ticket/ticket.component';
import { UserDashboardComponent } from './user-workflow/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path: '',component:LoginComponent},
  {path:'user',component: UserDashboardComponent },
  {path: 'movie_list',component:MovieListComponent},
  {path:'shows_list',component: ShowsListComponent },
  {path: 'ticket', component: TicketComponent},
  {path: 'theatre', component: TheatreDashboardComponent},
  {path: 'add_audi', component: AddAudiComponent},
  {path: 'register_user',component:UserRegisterComponent},
  {path: 'register_theatre',component:TheatreRegisterComponent },
  {path: 'add_audi',component:AddAudiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
