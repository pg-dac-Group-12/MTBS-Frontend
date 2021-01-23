import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFacade } from '../facade/UserFacade';
import { Theatre } from '../models/theatre.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:string = "http://localhost:8080/login/";
  actor!:User|Theatre ;
  
  constructor(private http:HttpClient, private userFacade:UserFacade) { }
  
  authenticateUser(email:string,password:string,isThetreAdmin:boolean):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}`,{"userName": email, "password":password});
  }

  logOffUser():Observable<User>{
    localStorage.removeItem("id_token");
    return this.http.get<any>(`${this.baseUrl}logoff`,);
  }

  changePassword(oldPassword:string,newPassword:string):Observable<HttpResponse<any>>{
    let params = new HttpParams();
    params.append('oldPassword',oldPassword);
    params.append('newPassword',newPassword);
    return this.http.post<any>(`${this.baseUrl}password/change`,null,{observe:'response',params:params});
  }
 
  private setJWT(auth:Observable<any>) : User|Theatre {
    let actor!:User|Theatre;
    auth.subscribe(resp =>{
      actor = resp.actor;
      localStorage.setItem('id_token',resp.jwt);
    })
    // localStorage.setItem('id_token', auth.subscribe(auth=));
    // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    return actor;
  }          
}
