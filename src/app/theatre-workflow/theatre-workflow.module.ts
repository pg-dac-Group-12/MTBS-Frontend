import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheatreDashboardComponent } from './theatre-dashboard/theatre-dashboard.component';
import { AddAudiComponent } from './add-audi/add-audi.component';
import { DeleteAudiComponent } from './delete-audi/delete-audi.component';
import { UpdateAudiComponent } from './update-audi/update-audi.component';
import { AddShowComponent } from './add-show/add-show.component';
import { CancelShowComponent } from './cancel-show/cancel-show.component';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieListComponent } from '../user-workflow/movie-list/movie-list.component';



@NgModule({
  declarations: [TheatreDashboardComponent, AddAudiComponent, DeleteAudiComponent, UpdateAudiComponent, AddShowComponent, CancelShowComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule
  ]
})
export class TheatreWorkflowModule { }
