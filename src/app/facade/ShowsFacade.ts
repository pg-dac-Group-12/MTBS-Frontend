import { ShowsService } from "../services/shows.service";
import {  ShowState } from "../states/ShowState";
import { tap } from "rxjs/operators";
export class ShowsFacade {
    
    constructor(private showService:ShowsService , private showState:ShowState) {}
 
    getShowsByMovieId( movieId : number) {
        const showsList = this.showService;
    }

    loadShowsByTheatreId(theatreId : number) {
        return this.showService.getAllShowsByTheatreId(theatreId)
               .pipe(tap(shows => this.showState.getShows()));
    }
    loadShowsByMovieIdAndDate(movieId:number, date:Date) {
        return this.showService.getAllShowsByMovieIdAndDate(movieId,date)
                .pipe(tap())
    }
}