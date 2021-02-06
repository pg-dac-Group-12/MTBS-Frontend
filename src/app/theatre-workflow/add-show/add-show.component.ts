import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieFacade } from 'src/app/facade/MovieFacade';
import { ShowsFacade } from 'src/app/facade/ShowsFacade';
import { Movie } from 'src/app/models/movie.model';
import { Shows } from 'src/app/models/shows.model';
import { Time } from '@angular/common';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieComponent } from 'src/app/shared/movie/movie.component';
import { MovieListComponent } from 'src/app/user-workflow/movie-list/movie-list.component';
@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css']
})
export class AddShowComponent implements OnInit {
  show: Shows = {
    theatre: null!,
    id: 0,
    audi: null!,
    date: new Date(),
    time: {
      hours: 0,
      minutes: 0
    },
    price: 0,
    tickets: [],
    seatmap: []
  };

  @Input() audiId!: number;
  @Input() theatreId!: number;
  movieId!: number;
  movies!: Movie[];
  currentDialog: any;
  message: string = "";
  constructor(private showFacade: ShowsFacade, private moviesFacade: MovieFacade,
    private router: Router, private modalService: NgbModal, private activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {

  }

  addShow(date: Date, time: Time, price: number) {
    // this.validateShow(myForm.value);
    this.message = "";
    console.log(date + " " + time + " " + price);
    this.show.date = new Date(date);
    this.show.time = time;
    this.show.price = price;
    console.log(this.show);
    if (this.showIsValid(this.show)) {
      this.close();
      console.log("addShow T-" + this.theatreId + " A-" + this.audiId + " M-" + this.movieId);
      this.showFacade.addShows(this.show, this.theatreId, this.audiId, this.movieId);
    }
  }

  loadMovieList() {
    this.moviesFacade.loadMovieList();
    this.moviesFacade.getAllMovies().subscribe(movieList => this.movies = movieList);
    // this.currentDialog = this.modalService.open(MovieListComponent,{backdrop:false});
    // this.currentDialog.componentInstance.isTheatre = true;
  }

  selectMovie(movieId: number) {
    this.movieId = movieId;
  }
  showIsValid(show: Shows): boolean {
    // let currentDate = new Date(Date.now());
    // let hours: number = currentDate.getHours();
    // currentDate.setHours(5, 30, 0);
    // console.log(currentDate);
    // console.log(show.date);
    // console.log(currentDate.getTime());
    // console.log(show.date.getTime());
    if (this.movieId == undefined) {
      this.message = "please select a movie";
      return false;
    }
    // if (show.date.getTime() >= currentDate.getTime()) {
    //   if (show.time.hours >= hours + 4) {
    //     return true;
    //   }
    // }
    // this.message = "Too late to schedule a show is at the given time. please try to schedule a show that is atleast 4 hours away from current time"
    return true;
  }
  close() {
    this.activeModal.close();
  }
}
