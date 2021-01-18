import { Time } from '@angular/common';
import { PaymentMode } from './payment-mode.model';
import { Ticket } from './ticket.model';

export interface Transaction {

    id:Number;
    amount:Number;
	time:Time; 
	ticket:Ticket;
    paymentMode:PaymentMode;
}
