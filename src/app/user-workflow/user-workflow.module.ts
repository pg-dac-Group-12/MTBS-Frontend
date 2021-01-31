import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ShowsListComponent } from './shows-list/shows-list.component';
import { TicketComponent } from './ticket/ticket.component';
import { FormsModule } from '@angular/forms';
import { TicketPageComponent } from './ticket-page/ticket-page.component';



@NgModule({
  declarations: [UserDashboardComponent, MovieListComponent, ShowsListComponent, TicketComponent, TicketPageComponent],
  imports: [
    CommonModule , FormsModule
  ]
})
export class UserWorkflowModule { }
