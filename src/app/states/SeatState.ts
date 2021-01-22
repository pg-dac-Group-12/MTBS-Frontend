import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Seat } from "../models/seat.model";

@Injectable()
export class SeatState{
    private seats$ = new BehaviorSubject<Seat[]>([]);


    getSeats() {
        return this.seats$.asObservable();
    }

    setSeats(seats :Seat[]) {
        this.seats$.next(seats);
    }
    addSeats(seats: Seat) {
        const currentValue = this.seats$.getValue();
        this.seats$.next([...currentValue, seats]);
    }

    updateSeats(seat:Seat) {
        const currentSeatsList = this.seats$.getValue();
        const indexOfUpdated = currentSeatsList.findIndex(seatItem => seat.rowNumber == seatItem.rowNumber && seat.colNumber == seatItem.colNumber); 
        currentSeatsList[indexOfUpdated] = seat ;
    }

}