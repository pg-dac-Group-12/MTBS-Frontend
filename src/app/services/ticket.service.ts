import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket.model';
import { Shows } from '../models/shows.model';
import { Utils} from '../Utils';
import { Seat } from '../models/seat.model';
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
    let reqParams = new HttpParams().append('seats', String(seats));
    return this.http.post<Ticket>(`${this.baseUrl}${showId}`, seats);
  }
  cancelTicket(ticket: Ticket): Observable<any>{
    return this.http.post<Ticket>(`${this.baseUrl}cancel/${ticket.id}`, ticket);
  }
  invalidateTicket(tempTicketId:number) {
    return this.http.get(`${this.baseUrl}invalidate/${tempTicketId}`)
  }
}

