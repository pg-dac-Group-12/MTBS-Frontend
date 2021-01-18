import { Seat } from './seat.model';
import { Theatre } from './theatre.model';

export interface Audi {
    id:Number;
    number:Number;
    seatMap:Seat[];
    totalSeats:Number;
    theatre:Theatre;

}
