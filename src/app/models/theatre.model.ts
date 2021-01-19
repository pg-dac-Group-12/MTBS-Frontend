import { Audi } from './audi.model';

export interface Theatre {
    id:number;
	email:string;
	password:string;
	name:string;
	city:string;
	location:string;
	audis:Audi[]; 

}
