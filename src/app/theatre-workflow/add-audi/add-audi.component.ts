import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Audi } from 'src/app/models/audi.model';
import { Theatre } from 'src/app/models/theatre.model';
import { TheatreService } from 'src/app/services/theatre.service';
import { TheatreFacade } from '../../facade/TheatreFacade'

@Component({
  selector: 'app-add-audi',
  templateUrl: './add-audi.component.html',
  styleUrls: ['./add-audi.component.css']
})
export class AddAudiComponent implements OnInit {
  theatre!:Theatre; //get from router link
  audi!:Audi
  message:string ="";
  constructor(private theatreFacade:TheatreFacade) { }

  ngOnInit(): void {
  }
  onSubmit(myForm:NgForm){
    this.audi = myForm.value ;
    this.audi.theatre = this.theatre;
    this.theatreFacade.addAudi(this.theatreFacade.getTheatre().id, this.audi);
  }
}
