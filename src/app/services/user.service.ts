import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserDashboardComponent } from '../user-workflow/user-dashboard/user-dashboard.component';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly baseUrl: string = "http://localhost:8080/user/"
  
  constructor(private http: HttpClient) { }

  getUser(): Observable<HttpResponse<User>> {
    return this.http.get<User>(this.baseUrl, { observe: 'response' });
  }

  createUser(user: User): Observable<HttpResponse<User>> {
    return this.http.post<User>(this.baseUrl, user, { observe: 'response' })
  }

  updateUser(user: User, id: number): Observable<HttpResponse<User>> {
    return this.http.put<User>(`${this.baseUrl}${id}`, user, { observe: 'response' })
  }

  deleteUser(id: number): Observable<HttpResponse<User>> {
    return this.http.delete<User>(`${this.baseUrl}${id}`, { observe: 'response' });
  }
}
