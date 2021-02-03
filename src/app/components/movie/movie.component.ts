import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie:Movie = {
    id: 1,
    title:"AA Takli Teri mang bharu",
    director:"Rohan julka",
    cast:["tanay k"," jatin b", " shubham j"," stuti"],
    duration:210,
    rating:9.9,
    icon:"phonewallpaper.jpg",
    totalShows:10,
    iconContentType:"image/png"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
