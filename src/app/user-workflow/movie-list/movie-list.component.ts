import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
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
  constructor(private moviesFacade: MovieFacade, private showsFacade:ShowsFacade , private router:Router) { }

  ngOnInit(): void {
    this.moviesFacade.loadMovieList();
    this.moviesFacade.getAllMovies().subscribe(movieList => this.movies = movieList);
  }

  getShowsForMovie(movieId:number){
    this.showsFacade.loadShowsByMovieIdAndDate(movieId, moment().format("YYYY-MM-DD"));
    this.router.navigate(["shows_list"], {state : {movieId:movieId}});
  } 
}
