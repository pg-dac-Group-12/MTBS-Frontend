import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ShowsListComponent } from './shows-list/shows-list.component';
import { TicketComponent } from './ticket/ticket.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserDashboardComponent, MovieListComponent, ShowsListComponent, TicketComponent],
  imports: [
    CommonModule , FormsModule
  ]
})
export class UserWorkflowModule { }
