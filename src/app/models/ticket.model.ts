import { Time } from '@angular/common';
import { Shows } from './shows.model';
import { Transaction } from './transaction.model';
import { User } from './user.model';

export interface Ticket {
    id:Number;
    show:Shows;
	user:User;
    seats:Number;
	amount:Number;
    time:Time ;
    date:Date;
	transaction:Transaction;
}
