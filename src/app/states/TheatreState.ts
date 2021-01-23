import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Theatre } from "../models/theatre.model";

@Injectable({
    providedIn:"root"
})
export class TheatreState{
    //private theatre$ = new BehaviorSubject<Theatre[]>([]);
    
    private theatre$ = new BehaviorSubject<Theatre>(null!);    

    getTheatre() {
        return this.theatre$.value ;
    }

    setTheatre(theatre :Theatre) {
        this.theatre$.next(theatre);
    }

    // addTheatres(theatre :Theatre) {
    //     const currentValue = this.theatre$.getValue();
    //     this.theatre$.next([...currentValue, theatre]);
    // }

    // updateTheatreById(id:number, updatedTheatre:Theatre) {
    //     const currentTheatresList = this.theatre$.getValue();
    //     const indexToUpdate = currentTheatresList.findIndex(theatre => theatre.id == id);
    //     currentTheatresList[indexToUpdate] = updatedTheatre;
    // }
    // removeTheatre(theatre: Theatre) {
    //     const currentValue = this.theatre$.getValue();
    //     this.theatre$.next(currentValue.filter(theatreItem => theatreItem !== theatre));
    // }
}