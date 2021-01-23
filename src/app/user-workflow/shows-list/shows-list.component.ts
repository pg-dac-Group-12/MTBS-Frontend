import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShowsFacade } from 'src/app/facade/ShowsFacade';
import { Shows } from 'src/app/models/shows.model';
import { Theatre } from 'src/app/models/theatre.model';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css']
})
export class ShowsListComponent implements OnInit {
  movieId!: number; // to be brought in by the redirecting link
  shows!: Shows[];
  date:Date = new Date(Date.now());
  theatres: Set<Theatre> = new Set<Theatre>();
  response = new HttpResponse<any>();
  constructor(private showsFacade: ShowsFacade) { }
  
  ngOnInit(): void {
      this.showsFacade.loadShowsByMovieIdAndDate(this.movieId,this.date);    
  }
  
  getShowSeatMap() {
    
  }
}
