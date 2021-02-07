import { Component, OnInit } from '@angular/core';
import { MovieFacade } from 'src/app/facade/MovieFacade';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private moviesFacade: MovieFacade) { }
  movies!: Movie[];
  ngOnInit(): void {
    this.moviesFacade.getAllMovies().subscribe(movieList => {
      this.movies =movieList;});
    
    this.movies = this.movies.sort((a, b) => {
        return b.totalShows - a.totalShows;
      }).slice(0, 5);
  }
}