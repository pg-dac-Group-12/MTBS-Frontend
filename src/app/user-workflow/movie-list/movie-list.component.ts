import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { MovieFacade } from 'src/app/facade/MovieFacade';
import { ShowsFacade } from 'src/app/facade/ShowsFacade';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { AddShowComponent } from 'src/app/theatre-workflow/add-show/add-show.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[]=[];
  isTheatre=false;//@Input() isTheatre!:boolean; will figure out later
  @Output() movieIdEvent = new EventEmitter<number>();
  currentDialog:any;
  constructor(private moviesFacade: MovieFacade, private showsFacade:ShowsFacade , private router:Router) { }

  ngOnInit(): void {
   this.moviesFacade.loadMovieList();
   this.moviesFacade.getAllMovies().subscribe(movieList => {this.movies = movieList;
    console.log(this.movies)});
  // LATER 
  //  let buttons = document.getElementsByTagName("button");
  //  for(var i =0; i < buttons.length ; i++){
  //    if(this.isTheatre)
  //    buttons[i].innerText = "Select";
  //  }
  }

  getShowsForMovie(movieId:number){
    this.showsFacade.loadShowsByMovieIdAndDate(movieId, moment().format("YYYY-MM-DD"));
    this.router.navigate(["shows_page"], {state : {movieId:movieId}});
  } 

  dispatchMovie(movieId:number){
    if(this.isTheatre){
      this.emitMovieId(movieId);
      // this.close();
    }else{
      this.getShowsForMovie(movieId);
    }
  }
  // close() {
  //   this.activeModal.close();
  // }
  emitMovieId(movieId:number){
    this.movieIdEvent.emit(movieId);
  }
}
 // this.movies = [{
      //   id:1234,
      //   cast :["Cast"],
      //   director:"d1",
      //   icon:"",
      //   rating:5,
      //   totalShows:5,
      //   iconContentType:"image/png",
      //   title:"Movie-Name",
      //   duration:200
      // },{
      //   id:1234,
      //   cast :["Cast"],
      //   director:"d1",
      //   icon:"",
      //   rating:5,
      //   totalShows:5,
      //   iconContentType:"image/png",
      //   title:"Movie-Name",
      //   duration:200
      // },{
      //   id:1234,
      //   cast :["Cast"],
      //   director:"d1",
      //   icon:"",
      //   rating:5,
      //   totalShows:5,
      //   iconContentType:"image/png",
      //   title:"Movie-Name",
      //   duration:200
      // },{
      //   id:1234,
      //   cast :["Cast"],
      //   director:"d1",
      //   icon:"",
      //   rating:5,
      //   totalShows:5,
      //   iconContentType:"image/png",
      //   title:"Movie-Name",
      //   duration:200
      // },{
      //   id:1234,
      //   cast :["Cast"],
      //   director:"d1",
      //   icon:"",
      //   rating:5,
      //   totalShows:5,
      //   iconContentType:"image/png",
      //   title:"Movie-Name",
      //   duration:200
      // }];