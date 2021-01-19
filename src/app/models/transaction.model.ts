import { Time } from '@angular/common';
import { PaymentMode } from './paymentMode';
import { Ticket } from './ticket.model';

export interface Transaction {

    id:number;
    amount:number;
	time:Time; 
	ticket:Ticket;
    paymentMode:PaymentMode;
}
