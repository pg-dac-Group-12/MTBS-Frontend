import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Audi } from 'src/app/models/audi.model';
import { TheatreService } from 'src/app/services/theatre.service';

@Component({
  selector: 'app-update-audi',
  templateUrl: './update-audi.component.html',
  styleUrls: ['./update-audi.component.css']
})
export class UpdateAudiComponent implements OnInit {
  theatreId!:number; //get from router link
  audiId!:number;    //get from router link
  audi!:Audi;        //get from router link /service like rohan said
  response = new HttpResponse<any>();
  message:string = "";
  constructor(private theatreService:TheatreService) { }

  ngOnInit(): void {
  }
  onSubmit(myForm:NgForm){
    this.audi = myForm.value;
    this.theatreService.updateAudi(this.theatreId,this.audiId,this.audi).subscribe(response => this.response = response);
    if(this.response.status == 201){
      this.message = "Audi details updated successfully";
    } else if (this.response.status == 304){
      this.message = "Failed to update audi details";
    }
  }
}
