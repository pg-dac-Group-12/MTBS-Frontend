import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:string = "http://localhost:8080/login/";
  
  constructor(private http:HttpClient) { }
  
  authenticateUser(email:string,password:string,isThetreAdmin:boolean):Observable<HttpResponse<any>>{
    let params = new HttpParams();
    params.append('email',email);
    params.append('password',password);
    params.append('isTheatrAdmin',String(isThetreAdmin));
    return this.http.post<any>(`${this.baseUrl}`,null,{observe:'response',params:params});
  }

  logOffUser():Observable<HttpResponse<any>>{
    return this.http.get<any>(`${this.baseUrl}logoff`,{observe:'response'});
  }

  changePassword(oldPassword:string,newPassword:string):Observable<HttpResponse<any>>{
    let params = new HttpParams();
    params.append('oldPassword',oldPassword);
    params.append('newPassword',newPassword);
    return this.http.post<any>(`${this.baseUrl}password/change`,null,{observe:'response',params:params});
  }
}
