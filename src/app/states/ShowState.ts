import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Shows } from "../models/shows.model";

@Injectable({
    providedIn:'root',
})
export class ShowState{
    private shows$ = new BehaviorSubject<Shows[]>([]);

    getShows() {
        console.log(this.shows$.getValue())
        return this.shows$.asObservable();
    }
    getShowById(showId:number){
        const currentShowsList = this.shows$.getValue();
        return currentShowsList[currentShowsList.findIndex(showItem => showId == showItem.id)]; 
    }
    setShows(shows :Shows[]) {
        console.log(shows);
        this.shows$.next(shows);
    }

    addShows(show :Shows) {
        const currentValue = this.shows$.getValue();
        this.shows$.next([...currentValue, show]);
    }

    updateShow(show :Shows) {
        const currentShowsList = this.shows$.getValue();
        const indexOfUpdated = currentShowsList.findIndex(showItem => show.id == showItem.id  ); 
        currentShowsList[indexOfUpdated] = show ;
    }

    updateShowById(id:number, updatedShow:Shows) {
        const currentShowsList = this.shows$.getValue();
        const indexToUpdate = currentShowsList.findIndex(movie => movie.id == id);
        currentShowsList[indexToUpdate] = updatedShow;
    }
    removeShow(show: Shows) {
        const currentValue = this.shows$.getValue();
        this.shows$.next(currentValue.filter(showItem => showItem !== show));
      }
}