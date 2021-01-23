import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieFacade } from 'src/app/facade/MovieFacade';
import { ShowsFacade } from 'src/app/facade/ShowsFacade';
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
  constructor(private moviesFacade: MovieFacade, private showsFace:ShowsFacade) { }

  ngOnInit(): void {
    this.moviesFacade.loadMovieList();

  }

  getShowsForMovie(id:number){
    this.moviesFacade.getAllMoviesById(id);
  }
}
