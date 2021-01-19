import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Audi } from 'src/app/models/audi.model';
import { Theatre } from 'src/app/models/theatre.model';
import { TheatreService } from 'src/app/services/theatre.service';

@Component({
  selector: 'app-add-audi',
  templateUrl: './add-audi.component.html',
  styleUrls: ['./add-audi.component.css']
})
export class AddAudiComponent implements OnInit {
  theatre!:Theatre; //get from router link
  audi!:Audi
  message:string ="";
  constructor(private theatreService:TheatreService) { }

  ngOnInit(): void {
  }
  onSubmit(myFrom:NgForm){
    this.audi.theatre = this.theatre;
    this.theatreService.createAudi(this.theatre.id, JSON.stringify(this.audi)).subscribe(
      response => {
        if(response.status == 201){
          this.message = "Audi Added";
        }else if(response.status == 304){
          this.message = "failed to add";
        }
      });
  }
}
