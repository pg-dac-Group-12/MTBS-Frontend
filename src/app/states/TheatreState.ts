import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Theatre } from "../models/theatre.model";

@Injectable()
export class TheatreState{
    private theatre$ = new BehaviorSubject<Theatre[]>([]);

    getTheatres() {
        return this.theatre$.asObservable();
    }

    setTheatres(theatres :Theatre[]) {
        this.theatre$.next(theatres);
    }

    addTheatres(theatre :Theatre) {
        const currentValue = this.theatre$.getValue();
        this.theatre$.next([...currentValue, theatre]);
    }

    updateTheatre(theatre :Theatre) {
        const currentTheatresList = this.theatre$.getValue();
        const indexOfUpdated = currentTheatresList.findIndex(theatreItem => theatre.id == theatreItem.id); 
        currentTheatresList[indexOfUpdated] = theatre ;
    }

    updateTheatreById(id:number, updatedTheatre:Theatre) {
        const currentTheatresList = this.theatre$.getValue();
        const indexToUpdate = currentTheatresList.findIndex(theatre => theatre.id == id);
        currentTheatresList[indexToUpdate] = updatedTheatre;
    }
    removeTheatre(theatre: Theatre) {
        const currentValue = this.theatre$.getValue();
        this.theatre$.next(currentValue.filter(theatreItem => theatreItem !== theatre));
    }
}