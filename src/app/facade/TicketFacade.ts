import { TicketService } from "../services/ticket.service";
import { TicketState } from "../states/TicketState";

import "../states/MovieState";
import { Ticket } from "../models/ticket.model";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn:"root"
})
export class TicketFacade {
    
    constructor(private ticketService:TicketService , private ticketState$:TicketState) {}
    
    getAllTickets() {
        return this.ticketState$.getTicket();
    }

    getTicketById(id:number) {
        this.ticketState$.getTicketById(id);
    }

    addTicket(ticket:Ticket) {
        this.ticketService.cancelTicket(ticket);
        this.ticketState$.addTicket(ticket);
    }
    
    cancelTicket(ticket:Ticket) { 
        this.ticketState$.removeTicket(ticket);
        return this.ticketService.cancelTicket(ticket);
    }

    loadTicketsByUserId(userId:number) {
        return this.ticketService.getAllTicketsByUserId(userId);
    }
}