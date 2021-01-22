import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Ticket } from "../models/ticket.model";

@Injectable()
export class TicketState{
    private ticket$ = new BehaviorSubject<Ticket[]>([]);

    getTicket() {
        return this.ticket$.asObservable();
    }
 
    getTicketById(id: number) {
        const currentTicketsList = this.ticket$.getValue();
        const indexOfMatchedTicket = currentTicketsList.findIndex(ticket=> ticket.id == id  ); 
        return currentTicketsList[indexOfMatchedTicket]  ;
    }
 
    setTicket(tickets :Ticket[]) {
        this.ticket$.next(tickets);
    }

    addTicket(ticket :Ticket) {
        const currentValue = this.ticket$.getValue();
        this.ticket$.next([...currentValue, ticket]);
    }

    // updateTicket(ticket :Ticket) {
    //     const currentTicketsList = this.ticket$.getValue();
    //     const indexOfUpdated = currentTicketsList.findIndex(ticketItem => ticket.id == ticketItem.id  ); 
    //     currentTicketsList[indexOfUpdated] = ticket ;
    // }

    // updateTicketById(id:number, updatedTicket:Ticket) {
    //     const currentTicketsList = this.ticket$.getValue();
    //     const indexToUpdate = currentTicketsList.findIndex(ticket => ticket.id == id);
    //     currentTicketsList[indexToUpdate] = updatedTicket;
    // }

    removeTicket(ticket: Ticket) {
        const currentValue = this.ticket$.getValue();
        this.ticket$.next(currentValue.filter(ticketItem => ticketItem !== ticket));
      }
}