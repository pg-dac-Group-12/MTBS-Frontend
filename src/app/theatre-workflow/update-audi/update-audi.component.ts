import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TheatreFacade } from 'src/app/facade/TheatreFacade';
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
  audi!:Audi;        //get from router link /service like Tanay said :p 
  response = new HttpResponse<any>();
  message:string = "";
  constructor(private theatreFacade:TheatreFacade) { }

  ngOnInit(): void {
  }
  onSubmit(myForm:NgForm){
    this.audi = myForm.value;
    this.theatreFacade.updateAudi(this.theatreId,this.audi);
    
  }
}
