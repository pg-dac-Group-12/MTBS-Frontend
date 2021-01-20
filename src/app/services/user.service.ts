import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserDashboardComponent } from '../user-workflow/user-dashboard/user-dashboard.component';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly baseUrl: string = "http://localhost:8080/user/"
  // httpResponse = new HttpResponse<User>();
 
  user!: User;
  
  constructor(private http: HttpClient) { }
  // set user(user: User) {
  //   this.user = user;
  // }
  // get user(): User {
  //   return this.user;
  // }
  cleanUserDetails() {
    this.user = { 'id': 0, 'name': '', 'email': '', 'password': '', 'phone_no': '', 'tickets': [] };
  }
  getUser():boolean {
    let isFethed:boolean = false;
    this.http.get<User>(this.baseUrl, { observe: 'response' })
      .subscribe(response => {
        if (response.status == 401) {
          //user not in session. redirection code goes here
        } else if (response.status == 200 && response.body != null) {
          this.user = response.body;
          isFethed = true;
        }
      });
      return isFethed;
  }

  createUser(user: User):boolean{
    let isCreated:boolean = false;
    this.http.post<User>(this.baseUrl, user, { observe: 'response' })
      .subscribe(response => {
        if (response.status == 400) {
          //no created
          isCreated = false;
        } else if (response.status == 200 && response.body != null) {
          this.user = response.body;
          isCreated = true;
        } 
      });
      return isCreated;
  }

  updateUser(user: User, id: number): boolean {
    let isUpdated:boolean = false;
    this.http.put<User>(`${this.baseUrl}${id}`, user, { observe: 'response' })
      .subscribe(response => {
        if (response.status == 400) {
          //no created
          isUpdated = false;
        } else if (response.status == 200 && response.body != null) {
          this.user = response.body;
          isUpdated = true;
        } 
      });
      return isUpdated;
  }

  deleteUser(id: number): boolean{
    
    let isDeleted:boolean = false;
    this.http.delete<User>(`${this.baseUrl}${id}`, { observe: 'response' })
      .subscribe(response => {
         if (response.status == 200 && response.body != null) {
          this.user = response.body;
          isDeleted = true;
        } 
      });
      return isDeleted;
  }
}
