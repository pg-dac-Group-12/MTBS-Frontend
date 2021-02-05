import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  @Input() audiId!:number;    //get from router link
  @Input() showsByAudi!:Shows[]; //Fix Shows 
  @Input() theatreId!:number;
  
  constructor( private theatreFacade:TheatreFacade, private modalService:NgbModal) {}
  
  ngOnInit(): void {
  }

  deleteAudi(){
    console.log("in delete audi");
    this.theatreFacade.deleteAudi(this.theatreId,this.audiId);
  }
}


