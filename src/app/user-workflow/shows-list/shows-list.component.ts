import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  theatres: Theatre[] = [];
  response = new HttpResponse<any>();
  constructor(private showsService: ShowsService) { }
  
  ngOnInit(): void {
    this.showsService.getAllShowsByMovieIdAndDate(this.movieId, new Date(Date.now())).subscribe(respone => this.response = respone);
    if (this.response.status == 200) {
      this.shows = this.response.body;
    } else if (this.response.status == 204) {
      this.shows = [];
    }
  }
}
