import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[]=[];
  response = new HttpResponse<any>();
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getAllMovies().subscribe(response => this.response = response);

    if (this.response.status == 200) {
      this.movies = this.response.body;
    } else if (this.response.status == 204) {
      //no movies found
    }
  }

  getShowsForMovie(id:number){
    //redirect to shows-list page
  }
}
