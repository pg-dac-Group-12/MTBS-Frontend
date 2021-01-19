import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Audi } from 'src/app/models/audi.model';
import { Shows } from 'src/app/models/shows.model';
import { ShowsService } from 'src/app/services/shows.service';
import { TheatreService } from 'src/app/services/theatre.service';

@Component({
  selector: 'app-delete-audi',
  templateUrl: './delete-audi.component.html',
  styleUrls: ['./delete-audi.component.css']
})
export class DeleteAudiComponent implements OnInit {
  theatreId!:number; //get from router link
  audiId!:number;    //get from router link
  showsByAudi:Shows[]=[];
  shows:Shows[]=[];
  audi!:Audi;
  message:string="";
  response = new HttpResponse<any>();
  constructor( private theatreService:TheatreService,private showsService:ShowsService) {}
  
  ngOnInit(): void {
    this.showsService.getAllShowsByTheatreId(this.theatreId).subscribe(response => this.response = response);
    if(this.response.status == 200){
      this.shows = this.response.body;
    } else if (this.response.status == 204){
      //no shows running for this theatre
    }

    this.theatreService.getAudi(this.theatreId,this.audiId).subscribe(response => this.response = response)
    if(this.response.status == 200){
      this.audi = this.response.body;
    } else if (this.response.status == 204){
      //no audis registered
    }
    this.shows.map(show=>{ if(show.id == this.audiId) this.showsByAudi.push(show);})
  }

  deleteAudi(){
    this.theatreService.deleteAudi(this.theatreId,this.audiId).subscribe(response=>this.response=response);
    if(this.response.status == 200){
      this.message = "Audi Deleted";
    } else {
      this.message = "Failed to Delete Audi";
    }
  }
}


