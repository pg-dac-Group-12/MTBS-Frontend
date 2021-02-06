import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { stat } from 'fs';
import { ShowsFacade } from 'src/app/facade/ShowsFacade';
import { TheatreFacade } from 'src/app/facade/TheatreFacade';
import { Audi } from 'src/app/models/audi.model';
import { Shows } from 'src/app/models/shows.model';
import { Theatre } from 'src/app/models/theatre.model';
import { AddAudiComponent } from '../add-audi/add-audi.component';
import { AddShowComponent } from '../add-show/add-show.component';
import { DeleteAudiComponent } from '../delete-audi/delete-audi.component';

@Component({
  selector: 'app-theatre-dashboard',
  templateUrl: './theatre-dashboard.component.html',
  styleUrls: ['./theatre-dashboard.component.css']
})
export class TheatreDashboardComponent implements OnInit {
  audis: Audi[] = [];
  shows: Shows[] = [];
  showsByAudi:Shows[]=[];
  theatre!: Theatre;
  currentDialog:any;
  constructor(private theatreFacade: TheatreFacade, private showFacade: ShowsFacade,
     private router:Router, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.theatreFacade.getTheatre().subscribe(theatre => {
      this.theatre = theatre;  
      this.theatreFacade.loadAudiByTheatreId(this.theatre.id);
      this.theatreFacade.getAudis().subscribe(audis=>{this.audis=audis;});
      console.log(this.theatre);
      console.log(this.audis);
      this.showFacade.loadShowsByTheatreId(this.theatre.id);
      this.showFacade.getShows().subscribe(shows => this.shows = shows);
      console.log(this.shows);
    })
  }

  getShowsByAudiId(audiId:number){
    this.showsByAudi =[];
    console.log(audiId);
    this.shows.map(show=>{ if(show.audi.id == audiId) this.showsByAudi.push(show);});
    console.log(this.showsByAudi);
  }
  
  cancelShow(show:Shows){
    this.currentDialog = this.modalService.open(AddShowComponent,{});
    this.currentDialog.componentInstance.show=show;
  }

  addShow(audiId:number) {
    console.log("addShow()  audiId-"+audiId+" theatreId="+this.theatre.id);
    this.currentDialog = this.modalService.open(AddShowComponent,{});
    this.currentDialog.componentInstance.audiId = audiId;
    this.currentDialog.componentInstance.theatreId = this.theatre.id;
  }

  deleteAudi(audiId:number) {
    console.log("deleteAudi "+audiId);
    this.getShowsByAudiId(audiId);
    this.currentDialog = this.modalService.open(DeleteAudiComponent,{backdrop:false});
    this.currentDialog.componentInstance.audiId = audiId;
    this.currentDialog.componentInstance.showsByAudi = this.showsByAudi;
    this.currentDialog.componentInstance.theatreId = this.theatre.id;
  }
  addAudi(){
    this.currentDialog = this.modalService.open(AddAudiComponent,{backdrop:false});
    this.currentDialog.componentInstance.theatreId = this.theatre.id;
  }
}
