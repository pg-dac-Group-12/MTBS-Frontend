import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShowsFacade } from 'src/app/facade/ShowsFacade';
import { Shows } from 'src/app/models/shows.model';

@Component({
  selector: 'app-cancel-show',
  templateUrl: './cancel-show.component.html',
  styleUrls: ['./cancel-show.component.css']
})
export class CancelShowComponent implements OnInit {
  show!:Shows // get from router someho
  constructor(private showFacade:ShowsFacade) { }

  ngOnInit(): void {
  }
  deleteShow(){       
    this.showFacade.cancelShows(this.show); 
  }
}
