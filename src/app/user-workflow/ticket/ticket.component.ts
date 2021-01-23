import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TicketFacade } from 'src/app/facade/TicketFacade';
import { UserFacade } from 'src/app/facade/UserFacade';
import { Ticket } from 'src/app/models/ticket.model';
import { User } from 'src/app/models/user.model';
import { TicketService } from 'src/app/services/ticket.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  response = new HttpResponse<any>();
  tickets: Ticket[] = [];
  user!: User;

  constructor(private ticketFacade: TicketFacade, private userFacade: UserFacade) { }

  ngOnInit(): void {
    this.userFacade.getUser();
    this.ticketFacade.loadTicketsByUserId(this.user.id)
  }

  cancelTicket(ticket: Ticket) {
    this.ticketFacade.cancelTicket(ticket);
  }
}
