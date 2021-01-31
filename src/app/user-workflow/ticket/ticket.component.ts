import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TicketFacade } from 'src/app/facade/TicketFacade';
import { UserFacade } from 'src/app/facade/UserFacade';
import { Ticket } from 'src/app/models/ticket.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  tickets: Ticket[] = [];
  user!: User; 
  responseMessage:string="";
  constructor(private ticketFacade: TicketFacade, private userFacade: UserFacade) { }

  ngOnInit(): void {
    this.userFacade.getUser().subscribe(user=> this.user=user);
    this.ticketFacade.loadTicketsByUserId(5).subscribe(tickets => this.tickets = tickets);
  }

  cancelTicket(ticket: Ticket) {
    console.log("cancel " +ticket.id)
    this.ticketFacade.cancelTicket(ticket).subscribe(resp => console.log(resp));

  }
}
