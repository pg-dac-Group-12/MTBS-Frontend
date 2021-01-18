import { Ticket } from './ticket.model';

export enum User {
    id:Number ;
	name:String  ;
	email:String ; 
	password:String ;
	phone_no:String ;
	tickets:Ticket[];
	
}
