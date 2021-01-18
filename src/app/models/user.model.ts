import { Ticket } from './ticket.model';

export interface User {
    id:Number ;
	name:String  ;
	email:String ; 
	password:String ;
	phone_no:String ;
	tickets:Ticket[];
	
}
