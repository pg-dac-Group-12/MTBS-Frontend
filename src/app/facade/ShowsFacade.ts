import { ShowsService } from "../services/shows.service";
import {  ShowState } from "../states/ShowState";
import { tap } from "rxjs/operators";
import { Shows } from "../models/shows.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root',
})
export class ShowsFacade {
    
    constructor(private showService:ShowsService , private showState$:ShowState) {}
 

    getShows() {
        return this.showState$.getShows();
    }

    addShows(show:Shows, theatreId:number , audiId:number , movieId:number) {
        this.showService.createShow(show,theatreId,audiId,movieId)
        .subscribe(shows => this.showState$.addShows(shows.body!))
    }

    cancelShows(show:Shows) {
        this.showService.cancelShow(show);
        this.showState$.removeShow(show);
    }

    loadShowsByTheatreId(theatreId : number) {
        return this.showService.getAllShowsByTheatreId(theatreId) 
        //.subscribe(shows => this.showState$.setShows());
    }

    loadShowsByMovieIdAndDate(movieId:number, date:Date) {
        return this.showService.getAllShowsByMovieIdAndDate(movieId,date)
                .pipe(tap())
    }
}