import { Time } from '@angular/common';
import { Seat } from './seat.model';
import { Shows } from './shows.model';
import { Transaction } from './transaction.model';
import { User } from './user.model';

export interface Ticket {
    id:number;
    show:Shows;
	user:User;
    seats:Seat[];
	amount:number;
    time:Time ;
    date:Date;
	transaction:Transaction;
}
