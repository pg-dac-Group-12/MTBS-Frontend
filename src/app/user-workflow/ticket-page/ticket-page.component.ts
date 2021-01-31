import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserFacade } from 'src/app/facade/UserFacade.js';
import { RazorpayDTO } from 'src/app/models/razorpayDTO.model';
import { Ticket } from 'src/app/models/ticket.model';
import { PaymentService } from 'src/app/services/payment.service';
import  '../../../assets/checkout.js';
declare const Razorpay:any ;

@Component({
  selector: 'app-ticket-page',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.css']
})
export class TicketPageComponent implements OnInit {
  
  order_id : String = "";
  options:any = null; 
  ticket!:Ticket  ;

  constructor(private paymentService:PaymentService, private userFacade:UserFacade) {
   }

  ngOnInit(): void {
  }


  initiatePayment(amount:number) {
    this.paymentService.createOrder(amount).subscribe(order_id => {
      this.order_id = order_id
      this.options = {
      "key": "rzp_test_l5ZltcixJREBlt", // Enter the Key ID generated from the Dashboard
      "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "MTBS Ltd",
      "description": "Test Transaction",
      "order_id": order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": this.paymentSuccess,
      "theme": {
        "color":"#1F1F1F",
      },
      "modal": {
        "confirm_close":true ,
        "ondismiss": function() {
          console.log("Dismissed");
        },
      },
      "timeout": 600
    };
    let rzp1 = new Razorpay(this.options);
    rzp1.on('payment.failed', function (response:any){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
        console.log("Failed");
    });
    rzp1.open();
    });
  }
  paymentSuccess(razorpayDTO:RazorpayDTO) {
      this.paymentService.paymentSuccess(razorpayDTO).subscribe(ticket => {
          this.ticket = ticket          
      });
      
  }
}

