import { Time } from '@angular/common';
import { Shows } from './shows.model';
import { Transaction } from './transaction.model';
import { User } from './user.model';

export interface Ticket {
    id:number;
    show:Shows;
	user:User;
    seats:number[];
	amount:number;
    time:Time ;
    date:Date;
	transaction:Transaction;
}
