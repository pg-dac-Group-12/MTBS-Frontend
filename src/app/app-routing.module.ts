import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { TheatreRegisterComponent } from './components/theatre-register/theatre-register.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { MovieListComponent } from './user-workflow/movie-list/movie-list.component';
import { ShowsListComponent } from './user-workflow/shows-list/shows-list.component';
import { TicketComponent } from './user-workflow/ticket/ticket.component';
import { UserDashboardComponent } from './user-workflow/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:'user',component: UserDashboardComponent , canActivate:[AuthGuard]},
  {path: 'movie_list',component:MovieListComponent, canActivate:[AuthGuard]},
  {path:'show_list',component: ShowsListComponent , canActivate:[AuthGuard]},
  {path: 'ticket', component: TicketComponent, canActivate:[AuthGuard]},
  {path: 'login',component:LoginComponent, canActivate:[AuthGuard]},
  {path: 'register_user',component:UserRegisterComponent, canActivate:[AuthGuard]},
  {path: 'register_theatre',component:TheatreRegisterComponent ,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
