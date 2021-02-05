import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
//import * as moment from 'moment';
import { TicketFacade } from 'src/app/facade/TicketFacade.js';
import { UserFacade } from 'src/app/facade/UserFacade.js';
import { RazorpayDTO } from 'src/app/models/razorpayDTO.model';
import { Seat } from 'src/app/models/seat.model.js';
import { Ticket } from 'src/app/models/ticket.model';
import { PaymentService } from 'src/app/services/payment.service';

import { RazorpayObject } from '../../../Razorpay'

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
  timer1:any ;
  timer2:any ;
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

  constructor(private paymentService: PaymentService, private userFacade: UserFacade , private activeModal:NgbActiveModal, private ticketFacade: TicketFacade) { 
  } 
  
  ngOnInit(): void {
    this.startTimer();
    this.ticketFacade.createTicket(this.showId,this.selectedSeats).subscribe(ticket =>  this.ticket = ticket);
  }
  
  stopTimer() {
    clearInterval(this.timer1)
    clearInterval(this.timer2)
  }
  startTimer() {
    this.sessionTimeMinutes = 9 ;
    this.sessionTimeSeconds = 60 ;
    this.timer1 = setInterval(() => {
        this.sessionTimeMinutes--;
        this.sessionTimeSeconds = 60 ;
        if(this.sessionTimeMinutes === 0){
        
          this.invalidateTicket();
        }
    },60000)
    this.timer2 = setInterval(() => {
      this.sessionTimeSeconds-- ;
      this.displayTime()
    },1000)
    
  }

  displayTime() {
    let minutes = this.sessionTimeMinutes.toString() ;
    let seconds = this.sessionTimeSeconds.toString() ;
    if(this.sessionTimeMinutes < 10 )
        minutes = "0" + this.sessionTimeMinutes ;
    if(this.sessionTimeSeconds < 10)
        seconds = "0" + this.sessionTimeMinutes ;
    this.sessionTime = minutes + ":" + seconds ;  
  }


  invalidateTicket() {
    this.ticketFacade.invalidateTicket(this.ticket.id);
    this.stopTimer();
  }

  initiatePayment() {
    this.paymentService.createOrder(this.ticket.amount * 100 ).subscribe(order => {
        let razorpayObject:RazorpayObject = new RazorpayObject();
        razorpayObject.initiatePayment(order , this.ticket.amount , 
          (razorpayDTO:RazorpayDTO) => {
            // On Payment Success
            console.log(razorpayDTO); 
            this.paymentService.paymentSuccess(razorpayDTO,this.ticket.id).subscribe(ticket => {
              this.ticket = ticket
              this.ticketFacade.addTicket(ticket);
              this.stopTimer();
            })      
        }, () => {
          this.invalidateTicket();
          //On Payment Failure       
        }) 
    })
  }
  close() {
    this.activeModal.close();
  }
}

