import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShowsFacade } from 'src/app/facade/ShowsFacade';
import { TheatreFacade } from 'src/app/facade/TheatreFacade';
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
  audiId!:number;    //get from router link

  constructor( private theatreFacade:TheatreFacade) {}
  
  ngOnInit(): void {
  }

  deleteAudi(){
    this.theatreFacade.deleteAudi(this.theatreFacade.getTheatre().id,this.audiId);
  }
}


