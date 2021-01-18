import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string = "http://localhost:8080/user/"

  constructor(private http:HttpClient){}

  
  createUser(user:User):Observable<HttpResponse<User>>{
    return this.http.post<User>(this.baseUrl,user,{observe:'response'});
  }

  updateUser(user:User,id:number):Observable<HttpResponse<User>>
  {
    return this.http.put<User>(`${this.baseUrl}${id}`,user,{observe : 'response'});
  }

  deleteUser(id:number):Observable<HttpResponse<User>>{
    return this.http.delete<User>(`${this.baseUrl}${id}`,{observe:'response'});
  }
}
