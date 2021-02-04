import { Seat } from './seat.model';
import { Theatre } from './theatre.model';

export interface Audi {
    id?:number;
    number:number;
    seatMap:Seat[];
    totalSeats:number;
    theatre?:Theatre;
}
