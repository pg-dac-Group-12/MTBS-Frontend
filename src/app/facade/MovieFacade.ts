import { MoviesService } from "../services/movies.service";
import { MovieState } from "../states/MovieState";

import "../states/MovieState";
import { tap } from "rxjs/operators";
export class MovieFacade {
    
    constructor(private movieService:MoviesService , private movieState:MovieState) {}
    
    getAllMovies() {
        return this.movieState.getAllMovies();
    }
    getAllMoviesById(id:number) {
        return this.movieState.getAllMoviesById(id);
    }
    loadMovieList() {
        return this.movieService.getAllMovies()
               .pipe(tap());
    }
}