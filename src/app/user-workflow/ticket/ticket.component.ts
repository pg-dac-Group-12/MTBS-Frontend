import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  tickets: Ticket[]=[];
  user!: User;

  constructor(private TicketService:TicketService, private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((response) => this.response = response);
    if (this.response.status == 401) {
      //user not in session. redirection code goes here
    } else if (this.response.status == 200 && this.response.body != null) {
      this.user = this.response.body;
    }

    this.TicketService.getAllTicketsByUserId(this.user.id).subscribe(response => this.response = response);
    if(this.response.status == 200)
      this.tickets = this.response.body;
    else if(this.response.status == 204)
       {}// no tickets booked so far(or all deleted)
  }

 cancelTicket(ticket:Ticket){
   this.TicketService.cancelTicket(ticket).subscribe(response => this.response = response);
   if(this.response.status == 200){
     //ticket deleted
   } else if (this.response.status == 400){
     //failed to delete ticket
   } else {
     //failed to delte only
   }
   //refresh the page to show updated list of tickets
 }
}
