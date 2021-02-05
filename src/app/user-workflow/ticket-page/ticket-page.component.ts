import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import * as moment from 'moment';
import { TicketFacade } from 'src/app/facade/TicketFacade.js';
import { UserFacade } from 'src/app/facade/UserFacade.js';
import { RazorpayDTO } from 'src/app/models/razorpayDTO.model';
import { Seat } from 'src/app/models/seat.model.js';
import { Ticket } from 'src/app/models/ticket.model';
import { PaymentService } from 'src/app/services/payment.service';
import '../../../assets/checkout.js';
declare const Razorpay: any;

@Component({
  selector: 'app-ticket-page',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.css']
})
export class TicketPageComponent implements OnInit {
  @Input() showId!:number;
  @Input() selectedSeats!:Seat[];
  order!: any;
  options: any = null;
  ticket!: Ticket;
  sessionTimeMinutes!:number;
  sessionTimeSeconds!:number;
  sessionTime!:string ;
  //   show: {
  //     audi: {
  //       number: 3
  //     },
  //     movie: {
  //       title: "movie title",
  //       icon: "so-this-dropped-yesterday-and-i-loved-this-frame-1366×768.jpg"
  //     },
  //     theatre: {
  //       name: "theatre name",
  //       city: "city",
  //       location: "location"
  //     },
  //     time: "00:00",
  //     date: "0th Nov"
  //   },
  //   user: {
  //     email: "a@a.com",
  //     name: "username",
  //     phoneNo: "0000000000"
  //   },
  //   seats: [
  //     {
  //       rowNumber: 3,
  //       colNumber: 'A',
  //       isBooked: false
  //     },
  //     {
  //       rowNumber: 4,
  //       colNumber: 'A',
  //       isBooked: false
  //     },
  //     {
  //       rowNumber: 3,
  //       colNumber: 'B',
  //       isBooked: false
  //     },
  //     {
  //       rowNumber: 4,
  //       colNumber: 'B',
  //       isBooked: false
  //     }
  //   ],
  //   amount: 2000
  // };

  constructor(private paymentService: PaymentService, private userFacade: UserFacade, private ticketFacade: TicketFacade) { 
  } 
  
  ngOnInit(): void {
    this.sessionTime = "Hello"
    this.sessionTimeMinutes = 10 ;
    this.sessionTimeSeconds = 60 ;
    let timer1 = setInterval(() => {
        this.sessionTimeMinutes--;
        this.sessionTimeSeconds = 60 ;
        if(this.sessionTimeMinutes === 0){
          clearInterval(timer1)
          clearInterval(timer2)
          this.invalidateTicket();
        }
    },60000)
    let timer2 = setInterval(() => {
      this.sessionTimeSeconds-- ;
      this.displayTime()
    },1000)
    
    this.ticketFacade.createTicket(this.showId,this.selectedSeats).subscribe(ticket =>  this.ticket = ticket);
  }
  
  invalidateTicket() {
    this.ticketFacade.invalidateTicket(this.ticket.id);
  }
  displayTime() {
    let minutes = this.sessionTimeMinutes.toString() ;
    let seconds = this.sessionTimeSeconds.toString() ;
    if(this.sessionTimeMinutes < 10 )
        minutes = "0" + this.sessionTimeMinutes ;
    if(this.sessionTimeSeconds < 10)
        seconds = "0" + this.sessionTimeMinutes ;
    let sessionTime = minutes + ":" + seconds ;  
    console.log(sessionTime)
  }


  initiatePayment(amount: number) {
    this.paymentService.createOrder(amount).subscribe(order=> {
      this.order = order
      console.log(this.order.id);
      this.options = {
        "key": "rzp_test_l5ZltcixJREBlt", // Enter the Key ID generated from the Dashboard
        "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "MTBS Ltd",
        "description": "Test Transaction",
        "order_id": this.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": (razorpayDTO:RazorpayDTO) => {
          console.log(razorpayDTO); 
          this.paymentService.paymentSuccess(razorpayDTO,this.ticket.id).subscribe(ticket => {
            this.ticket = ticket
            this.ticketFacade.addTicket(ticket);
          })
          
        },
        "theme": {
          "color": "#1F1F1F",
        },
        "modal": {
          "confirm_close": true,
          "ondismiss": () => {
            console.log("Dismissed");
            this.invalidateTicket();
          },
        },
        "timeout": 600
      };
      let rzp1 = new Razorpay(this.options);
      rzp1.on('payment.failed', (response:any) => {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
        console.log("Failed");
        this.invalidateTicket();
      });
      rzp1.open();
    });
  }
}

