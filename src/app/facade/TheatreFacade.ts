import { TheatreService } from "../services/theatre.service";
import { TheatreState } from "../states/TheatreState";
import "../states/MovieState";
import { Theatre } from "../models/theatre.model";
import { AudiState } from "../states/AudiState";
import { Audi } from "../models/audi.model";
export class TheatreFacade {
    
    constructor(private theatreService:TheatreService , private theatreState$:TheatreState , private audiState$:AudiState ) {}
    
    getTheatre() {
        return this.theatreState$.getTheatre();
    }

    addTheatre(theatre:Theatre) {
        this.theatreService.createTheatre(theatre);
        this.theatreState$.setTheatre(theatre);
    }

    updateTheatre(id:number, theatre:Theatre) {
        this.theatreService.updateTheatre(id , theatre);
        this.theatreState$.setTheatre(theatre);
    }

    deleteTheatre(id:number) {
        this.theatreService.deleteTheatre(id);
        this.theatreState$.setTheatre(null!);
    }

    getAudis() {
        this.audiState$.getAudis();
    }

    getAudiByAudiNumber(audiNumber:number) {
        this.audiState$.getAudiByAudiNumber(audiNumber) ;
    }

    addAudi(theatreId:number, audi:Audi) {
        this.theatreService.createAudi(theatreId, audi.toString());
        this.audiState$.addAudi(audi);
    } 

    updateAudi(theatreId:number , audiNumber:number ,audi:Audi) {
        this.theatreService.updateAudi(theatreId, audiNumber, audi);
        this.audiState$.updateAudiById(theatreId , audi);
    }

    deleteAudi(theatreId:number, audiId:number, audi:Audi) {
        this.theatreService.deleteAudi(theatreId,audiId) ;
        this.audiState$.removeAudi(audi);
    }    
    
    loadAudiByTheatreId(theatreId:number) {
        this.theatreService.getAllAudis(theatreId);
    }

    loadTheatreById(id:number) {
        return this.theatreService.getTheatre(id);
    }
}

/*
util.validateStatus(respoonse) = result or []/null/""/
    HttpRequest -> response (Service) -> util (status check karega) []-> Facade 
                                        |-> component -> Dialog("")
        obj = {
            200 : () => {
                //Componenent calling code with message 
                return result ;
            },
            300 : () => {
                    return [];
            }
        }

        validateStatus(response) {
            return obj[response.status]();
        }
*/