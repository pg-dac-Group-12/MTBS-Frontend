import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shows } from '../models/shows.model';
@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  baseUrl:string = "http://localhost:8080/shows/";
  constructor(private http:HttpClient) { }

  getAllShowsByMovieIdAndDate(movieId:number,date:Date):Observable<HttpResponse<Shows>>{
    let reqParams = new HttpParams();
    reqParams.append('movieId',String(movieId));
    reqParams.append('date',String(date))
    return this.http.get<Shows>(`${this.baseUrl}`,{observe:'response',params:reqParams});
  }
  
  getShowById(id:number):Observable<HttpResponse<Shows>>{
    return this.http.get<Shows>(`${this.baseUrl}${id}`,{observe:'response'});
  }

  getAllShowsByTheatreId(theatreId:number):Observable<HttpResponse<Shows>>{
    return this.http.get<Shows>(`${this.baseUrl}theatre/${theatreId}`,{observe:'response'});
  }

  createShow(show:Shows,theatreId:number,audiId:number,movieId:number):Observable<HttpResponse<Shows>>{
    let reqParams = new HttpParams();
    reqParams.append('theatreID',String(theatreId));
    reqParams.append('audiID',String(audiId));
    reqParams.append('movieID',String(movieId));
    return this.http.post<Shows>(`${this.baseUrl}`,show,{observe:'response',params:reqParams});
  }

  updateShow(id:number,show:Shows):Observable<HttpResponse<Shows>>{
    return this.http.put<Shows>(`${this.baseUrl}${id}`,show,{observe:'response'});
  }

  delteShow(id:number):Observable<HttpResponse<Shows>>{
    return this.http.delete<Shows>(`${this.baseUrl}${id}`,{observe:'response'});
  }

  cancelShow(show:Shows):Observable<HttpResponse<Shows>>{
    return this.http.post<Shows>(`${this.baseUrl}`,show,{observe:'response'});  
  }
}
