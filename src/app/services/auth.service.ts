import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserDashboardComponent } from '../user-workflow/user-dashboard/user-dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:string = "http://localhost:8080/login/";
  
  constructor(private http:HttpClient) { }
  
  authenticateUser(email:string,password:string,isThetreAdmin:boolean){
    let params = new HttpParams();
    params.append('email',email);
    params.append('password',password);
    params.append('isTheatrAdmin',String(isThetreAdmin));
    //return this.setJWT(this.http.post<any>(`${this.baseUrl}`,null,{observe:'response',params:params}));
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
 
  private setJWT(auth:Observable<HttpResponse<any>>) : HttpResponse<any> {
    let user:User;
    let response:HttpResponse<any>
    auth.subscribe(resp =>{
      response = resp ;
      localStorage.setItem('id_token',resp.body);
    })
    // localStorage.setItem('id_token', auth.subscribe(auth=));
    // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    return response!;
  }          
}
