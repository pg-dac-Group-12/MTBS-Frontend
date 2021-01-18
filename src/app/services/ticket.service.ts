import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket.model';
import { Shows } from '../models/shows.model';
@Injectable({
  providedIn: 'root'
})
export class TicketService {
  baseUrl: string = "http://localhost:8080/ticket/";
  constructor(private http: HttpClient) { }

  getAllTicketsByUserId(userId: number): Observable<HttpResponse<Ticket>> {
    let reqParams = new HttpParams();
    reqParams.append('userId', String(userId));
    return this.http.get<Ticket>(`${this.baseUrl}`, { observe: 'response', params: reqParams });
  }
  getTicketById(id: number): Observable<HttpResponse<Ticket>> {
    return this.http.get<Ticket>(`${this.baseUrl}${id}`, { observe: 'response' });
  }
  createTicket(showId: number, seats: number[]): Observable<HttpResponse<Ticket>> {
    let reqParams = new HttpParams();
    reqParams.append('seats', String(seats));
    return this.http.post<Ticket>(`${this.baseUrl}${showId}`, null, { observe: 'response', params: reqParams });
  }
  cancelTicket(ticket: Ticket): Observable<HttpResponse<Ticket>> {
    return this.http.post<Ticket>(`${this.baseUrl}`, ticket, { observe: 'response' });
  }
}

