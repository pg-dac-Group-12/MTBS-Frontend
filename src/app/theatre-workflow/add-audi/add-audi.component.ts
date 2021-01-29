import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Audi } from 'src/app/models/audi.model';
import { Seat } from 'src/app/models/seat.model';
import { Theatre } from 'src/app/models/theatre.model';
import { TheatreFacade } from '../../facade/TheatreFacade'

@Component({
  selector: 'app-add-audi',
  templateUrl: './add-audi.component.html',
  styleUrls: ['./add-audi.component.css']
})
export class AddAudiComponent implements OnInit {
  theatre!:Theatre; //get from router link
  audi!:Audi ;
  message:string ="";
  seatMap:Seat[]=[];
  constructor(private theatreFacade:TheatreFacade, private router:Router) {
    let audiNumber = this.router.getCurrentNavigation()?.extras.state!.audiNumber
    console.log(audiNumber);
    if(audiNumber != null) {
      this.audi = this.theatreFacade.getAudiByAudiNumber(audiNumber); 
    }  
  }

  ngOnInit(): void {

  }
  onSubmit(myForm:NgForm){
    this.audi = myForm.value ;
    this.audi.theatre = this.theatre;
    if(this.audi != null) 
      this.theatreFacade.updateAudi(this.theatreFacade.getTheatre().id,this.audi);
    this.theatreFacade.addAudi(this.theatreFacade.getTheatre().id, this.audi);
    this.audi.seatMap = this.seatMap;
  }

  createSeatMap(rows:number,columns:number){
    const alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    console.log(rows+ " "+ columns);
    for(var row=1; row<=rows;row++){
      for(var col=1; col<=columns;col++){
        this.seatMap.push({
          "rowNumber":row,
          "colNumber":alphabets[col-1],
          "isBooked":false
        })
      }
    }

    console.log(this.seatMap);
  
  }
}
