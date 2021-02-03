import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit, ɵisDefaultChangeDetectionStrategy } from '@angular/core';
import { ShowsFacade } from 'src/app/facade/ShowsFacade';
import { Shows } from 'src/app/models/shows.model';
import { Theatre } from 'src/app/models/theatre.model';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css'] 
})
export class ShowsListComponent implements OnInit {
  @Input() movieId!: number; // to be brought in by the redirecting link
  shows!: Shows[];
  dates: moment.Moment[] = [];
  selectedDate!: moment.Moment;
  selectedIndex!: number;
  theatres: Theatre[] = [];
  constructor(private showsFacade: ShowsFacade, private router: Router) {
   // this.movieId = this.router.getCurrentNavigation()?.extras.state!.movieId;
  }

  ngOnInit(): void {
    this.fillDateArray(Date.now())
  }

  fillDateArray(date: number) {
    [1, 2, 3, 4, 5].map(number => this.dates.push(moment(new Date()).add(number, "days")))
    //Fix This
  }

  getShowSeatMap(showId:number) {
    console.log(showId);
  }
  getDate() {

  }
  getAllShowsByMovieIdAndDate(movieDate:moment.Moment) {
    // this.selectedDate = movieDate.toDate();
    // console.log(this.selectedDate);
    // let movieId= this.router.getCurrentNavigation()!.extras.state!.movieId;
    //console.log(this.selectedDate.format("YYYY-MM-DD"))
    this.showsFacade.loadShowsByMovieIdAndDate(this.movieId, movieDate.format("YYYY-MM-DD"));
    this.showsFacade.getShows()
      .subscribe(shows => {
        console.log(shows);
        this.shows = shows;
        this.updateTheatres();
      });
  }

  updateTheatres() {
    if(this.shows.length === 0){
      this.theatres = [];
    }
    this.shows.map(show => {
      this.theatres.push(show.theatre);
    })
    var theatreIds: number[] = [];
    var uniqueTheatres = [];
    for (var theatre of this.theatres) {
      if (theatreIds.indexOf(theatre.id) === -1) {
        uniqueTheatres.push(theatre);
        theatreIds.push(theatre.id);
      }
      this.theatres = uniqueTheatres;
    }
  }
}