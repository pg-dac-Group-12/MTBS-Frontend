import { Audi } from './audi.model';

export interface Theatre {
    id:Number;
	email:String;
	password:String;
	name:String;
	city:String;
	location:String;
	audis:Audi[]; 

}
