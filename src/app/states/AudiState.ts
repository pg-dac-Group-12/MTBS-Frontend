import { Movie } from "../models/movie.model"
import {BehaviorSubject, Subject} from 'rxjs' 
import { Injectable } from "@angular/core";
import { Audi } from "../models/audi.model";

@Injectable({
    providedIn:"root"
})
export class AudiState {
    private audis$ = new BehaviorSubject<Audi[]>([]);

    getAudis() {
        return this.audis$.asObservable();
    }

    getAudiByAudiNumber(audiNumber:number) : Audi {
        const currentAudisList = this.audis$.getValue();
        const indexOfMatchedAudi= currentAudisList.findIndex(audi=> audi.number == audiNumber  ); 
        return currentAudisList[indexOfMatchedAudi]  ;
    }

    setAudis(audis :Audi[]) {
        this.audis$.next(audis);
    }

    addAudi(audi: Audi) {
        const currentValue = this.audis$.getValue();
        this.audis$.next([...currentValue, audi]);
    }

    updateAudi(audi:Audi) {
        const currentAudisList = this.audis$.getValue();
        const indexOfUpdated = currentAudisList.findIndex(audiItem => audi.id == audiItem.id  ); 
        currentAudisList[indexOfUpdated] = audi ;
    }

    updateAudiById(id:number, updatedAudi:Audi) {
        const currentAudisList = this.audis$.getValue();
        const indexToUpdate = currentAudisList.findIndex(audi => audi.id == id);
        currentAudisList[indexToUpdate] = updatedAudi ;
    }
    removeAudi(id:number) {
        const currentValue = this.audis$.getValue();
        this.audis$.next(currentValue.filter(audiItem => audiItem.id !== id));
      }
}