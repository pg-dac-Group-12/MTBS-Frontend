import { Component, Input, OnInit } from '@angular/core';
import { MovieFacade } from 'src/app/facade/MovieFacade';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movieId!:number;
  movie:Movie = null!; 
  
  constructor (private movieFacade:MovieFacade) { }
  
  ngOnInit(): void {
    this.movie= this.movieFacade.getMovieById(this.movieId);
  }

}
  // movie:Movie = {
  //   id: 1,
  //   title:"AA Takli Teri mang bharu",
  //   director:"Rohan julka",
  //   cast:["tanay k"," jatin b", " shubham j"," stuti"],
  //   duration:210,
  //   rating:9.9,
  //   icon:"phonewallpaper.jpg",
  //   totalShows:10,
  //   iconContentType:"image/png"
  // }