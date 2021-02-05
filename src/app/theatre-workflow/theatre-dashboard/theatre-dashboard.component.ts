import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ShowsFacade } from 'src/app/facade/ShowsFacade';
import { TheatreFacade } from 'src/app/facade/TheatreFacade';
import { Audi } from 'src/app/models/audi.model';
import { Shows } from 'src/app/models/shows.model';
import { Theatre } from 'src/app/models/theatre.model';
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
    this.theatre = this.theatreFacade.getTheatre();
    console.log(this.theatre);

    this.showFacade.loadShowsByTheatreId(this.theatre.id);
    this.showFacade.getShows().subscribe(shows => this.shows = shows);
    console.log(this.shows);
  }

  getShowsByAudiId(audiId:number){
    this.showsByAudi =[];
    console.log(audiId);
    this.shows.map(show=>{ if(show.audi.id == audiId) this.showsByAudi.push(show);});
    console.log(this.showsByAudi);
  }
  
  cancelShow(show:Shows){
    //redirect to cancel shows
    this.showFacade.cancelShows(show);
    // this.showsService.cancelShow(show).subscribe(respone=>this.response = respone);
    // if(this.response.status == 200){
    //     //show canceled
    // } else if (this.response.status == 400){
    //     //can't cancel show now
    // }
  }

  addShow(audiId:number) {
    console.log("addShow()  audiId-"+audiId+" theatreId="+this.theatre.id);

    this.router.navigate(['/add_show'],{state : { audiId : audiId,theatreId:this.theatre.id}});
  }

  deleteAudi(audiId:number) {
    console.log("deleteAudi "+audiId);
    this.getShowsByAudiId(audiId);
    this.currentDialog = this.modalService.open(DeleteAudiComponent,{});
    this.currentDialog.componentInstance.audiId = audiId;
    this.currentDialog.componentInstance.showsByAudi = this.showsByAudi;
    this.currentDialog.componentInstance.theatreId = this.theatre.id;
  }
  addAudi(){
    this.router.navigate(['/add_audi'],{state:{theatreId:this.theatre.id}})
  }
}
