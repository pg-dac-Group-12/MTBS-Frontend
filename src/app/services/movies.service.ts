import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl:string = "http://localhost:8080/movie/"

  constructor(private http:HttpClient){}

  createMovie(movie:Movie):Observable<HttpResponse<Movie>>{
    return this.http.post<Movie>(this.baseUrl,movie,{observe:'response'});
  }

  updateMovie(movie:Movie,id:number):Observable<HttpResponse<Movie>>
  {
    return this.http.put<Movie>(`${this.baseUrl}${id}`,movie,{observe : 'response'});
  }

  deleteMovie(id:number):Observable<HttpResponse<Movie>>{
    return this.http.delete<Movie>(`${this.baseUrl}${id}`,{observe:'response'});
  }
  getAllMovieById(id:number):Observable<HttpResponse<Movie>>{
    return this.http.get<Movie>(`${this.baseUrl}${id}`,{observe:'response'});
  }
// check pending
  getAllMovies():Observable<HttpResponse<Movie>>
  {
    return this.http.get<Movie>(`${this.baseUrl}`,{observe:'response'});
  }
}