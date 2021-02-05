import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieFacade } from 'src/app/facade/MovieFacade';
import { ShowsFacade } from 'src/app/facade/ShowsFacade';
import { Movie } from 'src/app/models/movie.model';
import { Shows } from 'src/app/models/shows.model';
import { Time } from '@angular/common';
@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css']
})
export class AddShowComponent implements OnInit {
  show:Shows={
    id:0,
    audi:null!,
    date:new Date(),
    time:{
      hours:0,
      minutes:0
    },
    price:0,
    tickets:[],
    seatmap:[]
  };
  
  audiId!:number;
  theatreId!:number;
  movieId!:number;
  movies!:Movie[];
  constructor(private showFacade:ShowsFacade, private moviesFacade:MovieFacade,
    private router:Router) { 
      console.log("in constr of add audi ");
      this.audiId = this.router.getCurrentNavigation()?.extras.state!.audiId;
      this.theatreId = this.router.getCurrentNavigation()?.extras.state!.theatreId;
      console.log("in constr of add audi " + this.audiId + " "+this.theatreId);
    }

  ngOnInit(): void {
    
  }

  addShow(date:Date,time:Time,price:number) {
   // this.validateShow(myForm.value);
   console.log(date+" "+time+ " "+price);
    this.show.date = date;
    this.show.time = time;
    this.show.price = price;
    console.log(this.show);
    console.log("addShow T-"+this.theatreId+" A-"+this.audiId+" M-"+this.movieId);
    this.showFacade.addShows(this.show,this.theatreId,this.audiId,this.movieId);
  }

  loadMovieList(){
    this.moviesFacade.loadMovieList();
    this.moviesFacade.getAllMovies().subscribe(movieList => this.movies = movieList);
  }
  SelectMovie(movieId:number){
    this.movieId = movieId;
  }
  // validateShow(show:Shows){
  //   let currentDate = new Date(Date.now());
  //   let currentTime = {};
  // }
}
