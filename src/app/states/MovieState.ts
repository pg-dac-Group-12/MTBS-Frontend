import { Movie } from "../models/movie.model"
import {BehaviorSubject, Subject} from 'rxjs' 
import { Injectable } from "@angular/core";

@Injectable()
export class MovieState {
    private movies$ = new BehaviorSubject<Movie[]>([]);

    getMovies() {
        return this.movies$.asObservable();
    }

    setMovies(movies :Movie[]) {
        this.movies$.next(movies);
    }

    addMovie(movie: Movie) {
        const currentValue = this.movies$.getValue();
        this.movies$.next([...currentValue, movie]);
    }

    updateMovie(movie:Movie) {
        const currentMoviesList = this.movies$.getValue();
        const indexOfUpdated = currentMoviesList.findIndex(movieItem => movie.id == movieItem.id  ); 
        currentMoviesList[indexOfUpdated] = movie ;
    }

    updateMovieById(id:number, updatedMovie:Movie) {
        const currentMoviesList = this.movies$.getValue();
        const indexToUpdate = currentMoviesList.findIndex(movie => movie.id == id);
        currentMoviesList[indexToUpdate] = updatedMovie ;
    }
    removeMovie(movie: Movie) {
        const currentValue = this.movies$.getValue();
        this.movies$.next(currentValue.filter(movieItem => movieItem !== movie));
      }
}