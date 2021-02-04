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
  theatreId!:number;
  seatMap:Seat[]=[];
  audi: Audi ={
    number :0,
    totalSeats :0,
    seatMap : []  
  };
  message: string = "";
 
  constructor(private theatreFacade: TheatreFacade, private router: Router) {
    this.theatreId = this.router.getCurrentNavigation()?.extras.state?.theatreId;
    console.log(this.theatreId);
  }

  ngOnInit(): void {
  
  }
  onSubmit(myForm: NgForm) {
    if(this.audi.seatMap == []){
      this.message="seatmap can't be empty"
    }else if(this.audi.number === 0){
      this.message = "audinumber cant be zero";
    }
    else {
      this.message = "";
      this.theatreFacade.addAudi(this.theatreId,this.audi);
    }
  }
  

  createSeatMap(rows: number, columns: number) {
    this.seatMap = [];
    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    console.log(rows + " " + columns);
    for (var col = 1; col <= columns; col++) {
      for (var row = 1; row <= rows; row++) {
        if (row === Math.floor(rows / 2) + 1) {
          this.seatMap.push(
            {
              "rowNumber": 0,
              "colNumber": '0',
              "isBooked": false
            }
          )
          this.seatMap.push(
            {
              "rowNumber": row,
              "colNumber": alphabets[col - 1],
              "isBooked": false
            }
          )
        }
        else {
          this.seatMap.push({
            "rowNumber": row,
            "colNumber": alphabets[col - 1],
            "isBooked": false
          })
        }
      }
    }
    
    this.audi.totalSeats = rows*columns;
    this.audi.seatMap = this.seatMap;
    console.log(this.audi.seatMap);
    console.log(this.audi.totalSeats);
  }
}
