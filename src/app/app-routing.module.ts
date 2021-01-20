import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MovieListComponent } from './user-workflow/movie-list/movie-list.component';
import { TicketComponent } from './user-workflow/ticket/ticket.component';
import { UserDashboardComponent } from './user-workflow/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:'user',component: UserDashboardComponent},
  {path: 'ticket', component: TicketComponent},
  {path: 'login',component:LoginComponent},
  {path: 'movie-list',component:MovieListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
