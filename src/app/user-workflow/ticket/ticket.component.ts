import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketFacade } from 'src/app/facade/TicketFacade';
import { UserFacade } from 'src/app/facade/UserFacade';
import { Seat } from 'src/app/models/seat.model';
import { Ticket } from 'src/app/models/ticket.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  tickets: Ticket[] = [];
  ticket!:Ticket;
  user!: User; 
  responseMessage:string="";
  constructor(private ticketFacade: TicketFacade, private userFacade: UserFacade , private router:Router) { }

  ngOnInit(): void {
    this.user = this.userFacade.getUser();
    this.ticketFacade.loadTicketsByUserId(this.user.id).subscribe(tickets => this.tickets = tickets);
  }

  
  cancelTicket(ticket: Ticket) {
    console.log("cancel " +ticket.id)
    this.ticketFacade.cancelTicket(ticket).subscribe(resp => console.log(resp));

  }
}
