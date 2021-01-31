import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket.model';
import { Seat } from '../models/seat.model';
import { Utils} from '../Utils';
@Injectable({
  providedIn: 'root'
})
export class TicketService {
  baseUrl: string = "http://localhost:8080/ticket/";
  constructor(private http: HttpClient) { }

  getAllTicketsByUserId(userId: number): Observable<Ticket[]> {
    let reqParams = new HttpParams()
    .append('userId', String(userId));
    return this.http.get<Ticket[]>(`${this.baseUrl}`, { params: reqParams });
  }
  getTicketById(id: number):Ticket {
    return Utils.validateResponse(this.http.get<Ticket>(`${this.baseUrl}${id}`, { observe: 'response' }));
  }
  createTicket(showId: number, seats: Seat[]): Observable<Ticket> {
    let params = new HttpParams()
    .append('seats', String(seats));
    return this.http.post<Ticket>(`${this.baseUrl}${showId}`, null, { params: params });
  }
  cancelTicket(ticket: Ticket): Observable<Ticket>{
    return this.http.post<Ticket>(`${this.baseUrl}`, ticket);
  }
}

