import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Audi } from 'src/app/models/audi.model';
import { Shows } from 'src/app/models/shows.model';
import { Theatre } from 'src/app/models/theatre.model';
import { ShowsService } from 'src/app/services/shows.service';
import { TheatreService } from 'src/app/services/theatre.service';

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
  response = new HttpResponse<any>();
  constructor(private theatreService: TheatreService, private showsService: ShowsService) { }

  ngOnInit(): void {
    this.theatreService.getTheatreFromSession().subscribe((response) => this.response = response);
    if (this.response.status == 401) {
      //Theatre not in session. redirection code goes here
    } else if (this.response.status == 200 && this.response.body != null) {
      this.theatre = this.response.body;
    }
    this.theatreService.getAllAudis(this.theatre.id).subscribe(response=>this.response=response);
    if(this.response.status == 200){
      this.audis = this.response.body;
    } else if (this.response.status == 204){
      //no audis registered
    }
    this.showsService.getAllShowsByTheatreId(this.theatre.id).subscribe(response => this.response = response);
    if(this.response.status == 200){
      this.shows = this.response.body;
    } else if (this.response.status == 204){
      //no shows running for this theatre
    }
  }

  getShowsByAudiId(audiId:number){
    this.shows.map(show=>{ if(show.id == audiId) this.showsByAudi.push(show);})
  }
  
  cancelShow(show:Shows){
    //redirect to cancel shows

    // this.showsService.cancelShow(show).subscribe(respone=>this.response = respone);
    // if(this.response.status == 200){
    //     //show canceled
    // } else if (this.response.status == 400){
    //     //can't cancel show now
    // }
  }

}
