import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ShowsFacade } from 'src/app/facade/ShowsFacade';
import { Shows } from 'src/app/models/shows.model';

@Component({
  selector: 'app-cancel-show',
  templateUrl: './cancel-show.component.html',
  styleUrls: ['./cancel-show.component.css']
})
export class CancelShowComponent implements OnInit {
  @Input() show!:Shows 

  constructor(private showFacade:ShowsFacade,private activeModal:NgbActiveModal ,
    private router:Router) {
   }

  ngOnInit(): void {
  }
  cancelShow(){       
    console.log("in CancelshowCOmponent.cancelShow()");
    this.showFacade.cancelShows(this.show); 
    this.router.navigateByUrl('/theatre'); 
    this.close();
  }
  close() {
    this.activeModal.close();
  }
}
