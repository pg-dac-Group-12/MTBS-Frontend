import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Shows } from 'src/app/models/shows.model';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-cancel-show',
  templateUrl: './cancel-show.component.html',
  styleUrls: ['./cancel-show.component.css']
})
export class CancelShowComponent implements OnInit {
  show!:Shows // get from router someho
  message:string = "";
  response = new HttpResponse<any>();
  constructor(private showsService:ShowsService) { }

  ngOnInit(): void {
  }
  deleteShow(){
    this.showsService.cancelShow(this.show).subscribe(response => this.response = response);
    if(this.response.status == 200){
      this.message ="show canceled successfully";
    } else if (this.response.status == 400){
      this.message = "can't cancel this show";
    }
  }
}
