import { ShowsService } from "../services/shows.service";
import { ShowState } from "../states/ShowState";
import { tap } from "rxjs/operators";
import { Shows } from "../models/shows.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ShowsFacade {

    constructor(private showService: ShowsService, private showState$: ShowState) { }


    getShows() {
        return this.showState$.getShows();
    }
    getShowById(showId: number) {
        return this.showState$.getShowById(showId);
    }

    addShows(show: Shows, theatreId: number, audiId: number, movieId: number) {
        this.showService.createShow(show, theatreId, audiId, movieId)
            .subscribe(shows => this.showState$.addShows(shows.body!))
    }

    cancelShows(show: Shows) {
        this.showService.cancelShow(show.id).subscribe();
        this.showState$.removeShow(show);
    }

    loadShowsByTheatreId(theatreId: number) {
        return this.showService.getAllShowsByTheatreId(theatreId)
            .subscribe(shows => { console.log(shows); this.showState$.setShows(shows) });
    }

    loadShowsByMovieIdAndDate(movieId: number, date: String) {
        console.log("Loading Shows");
        return this.showService.getAllShowsByMovieIdAndDate(movieId, date)
            .subscribe(shows => {
                console.log("show facase");
                console.log(shows[0].seatmap);
                this.showState$.setShows(shows);
            });
    }
}