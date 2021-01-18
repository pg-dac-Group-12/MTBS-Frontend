import { Time } from '@angular/common';
import { Audi } from './audi.model';
import { Movie } from './movie.model';
import { Seat } from './seat.model';
import { Theatre } from './theatre.model';
import { Ticket } from './ticket.model';

export interface Shows {
    id:Number;
    audi:Audi;
    movie:Movie;
    theatre:Theatre;
    tickets:Ticket[];
    time:Time;
    date:Date;
    price:Number;
    seatmap:Seat[];
}
