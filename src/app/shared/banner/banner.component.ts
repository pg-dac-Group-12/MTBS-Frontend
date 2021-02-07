import { Component, Input, OnInit } from '@angular/core';
import { MovieFacade } from 'src/app/facade/MovieFacade';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {


  @Input() movieId!:number;
  movie:Movie = null!; 
  
  constructor (private movieFacade:MovieFacade) { }
  
  ngOnInit(): void {
    this.movie= this.movieFacade.getMovieById(this.movieId);
  }


}
