import { identifierModuleUrl } from '@angular/compiler';
import { Ticket } from './ticket.model';

export interface User {
    id:number ;
	name:string  ;
	email:string ; 
	password:string ;
	phone_no:string ;
	tickets:Ticket[];

}
