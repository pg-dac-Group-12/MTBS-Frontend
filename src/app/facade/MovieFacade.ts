import { MoviesService } from "../services/movies.service";
import { MovieState } from "../states/MovieState";

import "../states/MovieState";
import { tap } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root',
})
export class MovieFacade {
    constructor(private movieService:MoviesService , private movieState$:MovieState) {}
    
    getAllMovies() {
        return this.movieState$.getAllMovies();
    }
    getAllMoviesById(id:number) {
        return this.movieState$.getAllMoviesById(id);
    }
    loadMovieList() {
        console.log("In Movie Facade")
        this.movieService.getAllMovies().subscribe(movies => this.movieState$.setMovies(movies))
    }
}