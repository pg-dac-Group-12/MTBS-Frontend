import { MoviesService } from "../services/movies.service";
import { MovieState } from "../states/MovieState";

import "../states/MovieState";
import { tap } from "rxjs/operators";
import * as saveAs from 'file-saver';
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

    loadMovieIcons() {
    //     this.movieState$.getAllMovies().subscribe(movies => {
    //         movies.map(movie => {
    //             this.movieService.getIcons(movie.id)
    //             .subscribe(imageDTO => {
    //                 let encodedImageData:string = btoa(imageDTO[0].data);
    //                 console.log(encodedImageData);
    //                 let imageFile = new Blob([encodedImageData], { type: imageDTO[0].type}); 
    //                 let path:string =  movie.id + '/icon' + imageDTO[0].type;                   
                    
    //                 movie.icon = path; 
    //             })
    //         })
    //     })
     }
}