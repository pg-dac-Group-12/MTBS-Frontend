import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketComponent } from './user-workflow/ticket/ticket.component';
import { UserDashboardComponent } from './user-workflow/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:'user',component: UserDashboardComponent},
  {path: 'ticket', component: TicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
