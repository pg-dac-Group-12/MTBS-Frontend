import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { Utils } from '../Utils';
import { imgDTO } from '../models/imgDTO.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl:string = "http://localhost:8080/movie/"

  constructor(private http:HttpClient){}

  createMovie(movie:Movie):Observable<HttpResponse<Movie>>{
    return Utils.validateResponse(this.http.post<Movie>(this.baseUrl,movie,{observe:'response'}));
  }

  updateMovie(movie:Movie,id:number):Observable<HttpResponse<Movie>> {
    return Utils.validateResponse(this.http.put<Movie>(`${this.baseUrl}${id}`,movie,{observe : 'response'}));
  }

  deleteMovie(id:number):Observable<HttpResponse<Movie>>{
    return Utils.validateResponse(this.http.delete<Movie>(`${this.baseUrl}${id}`,{observe:'response'}));
  }

  getAllMovieById(id:number):Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}${id}`);
 }
// check pending
  getAllMovies():Observable<Movie[]> {
    console.log("Hello");
    return this.http.get<Movie[]>(`${this.baseUrl}`);
  }

  getIcon(id:number):Observable<imgDTO[]>{
    console.log("hello");
    return this.http.get<imgDTO[]>(`${this.baseUrl}/download/${id}`);
  }
}