import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theatre } from '../models/theatre.model';
import { Audi } from '../models/audi.model';
@Injectable({
  providedIn: 'root'
})
export class TheatreService {
  baseUrl:string = "http://localhost:8080/theatre/";
  constructor(private http:HttpClient) { }

  getTheatreFromSession():Observable<HttpResponse<Theatre>>{
    return this.http.get<Theatre>(this.baseUrl,{observe:'response'});
  }

  getTheatre(id:number):Observable<Theatre>{
    return this.http.get<Theatre>(`${this.baseUrl}${id}`);
  }

  createTheatre(theatre:Theatre):Observable<HttpResponse<Theatre>>{
    return this.http.post<Theatre>(`${this.baseUrl}`,theatre,{observe:'response'});
  }

  updateTheatre(id:number,theatre:Theatre):Observable<HttpResponse<Theatre>>{
    return this.http.put<Theatre>(`${this.baseUrl}${id}`,theatre,{observe:'response'});
  }

  deleteTheatre(id:number):Observable<HttpResponse<Theatre>>{
    return this.http.delete<Theatre>(`${this.baseUrl}${id}`,{observe:'response'});
  }
  
  getAllAudis(id:number):Observable<Audi[]>{
    return this.http.get<Audi[]>(`${this.baseUrl}${id}/audis`);
  }

  getAudi(id:number,audiId:number):Observable<HttpResponse<Audi>>{
    return this.http.get<Audi>(`${this.baseUrl}${id}/audi/${audiId}`,{observe:'response'});
  }

  createAudi(id:number,audi:Audi):Observable<Audi>{
    console.log(id);
    console.log("createAudi sErive" +audi);
    return this.http.post<Audi>(`${this.baseUrl}${id}/audi`,audi);
  }
  updateAudi(id:number,audiId:number,audi:Audi):Observable<HttpResponse<Audi>>{
    return this.http.put<Audi>(`${this.baseUrl}${id}/audi/${audiId}`,audi,{observe:'response'});
  }

  deleteAudi(id:number,audiId:number){
    console.log("theatreService-deleteAudi "+ id + " "+ audiId);
    return this.http.delete(`${this.baseUrl}${id}/audi/${audiId}`);
  }
}
