import { Component, OnInit } from '@angular/core';
import { ShowsFacade } from 'src/app/facade/ShowsFacade';
import { Seat } from 'src/app/models/seat.model';
import { Shows } from 'src/app/models/shows.model';

@Component({
  selector: 'app-seat-map',
  templateUrl: './seat-map.component.html',
  styleUrls: ['./seat-map.component.css']
})
export class SeatMapComponent implements OnInit {
  seatMap: Seat[]=[];
  selectedSeats:Seat[]=[];
  show:any={
    price:200
  };
  showID!:number;
  // rows!:number;
  // columns!:number;

  constructor(private showsFacade:ShowsFacade) { }

  ngOnInit(): void {
    //this.show = this.showsFacade.getShowByID(this.showID);
 
  }


  // from add audi
  createSeatMap(rows: number, columns: number) {
    this.seatMap=[];
    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    console.log(rows + " " + columns);
    for (var col = 1; col <= columns; col++) {
      for (var row = 1; row <= rows; row++) {

        if(row === Math.floor(rows/2)+1){
          this.seatMap.push(
            {
              "rowNumber": 0,
              "colNumber": '0',
              "isBooked": false
            }
          )
        }
        if(row%2==1){
          this.seatMap.push({
            "rowNumber": row,
            "colNumber": alphabets[col - 1],
            "isBooked": true
          })
        }else {
        this.seatMap.push({
          "rowNumber": row,
          "colNumber": alphabets[col - 1],
          "isBooked": false
        })
      }
      }
    }

    // for (var i = 1; i <= rows; i++) {
    //   this.seatMap.push(
    //     {
    //       "rowNumber": 0,
    //       "colNumber": '0',
    //       "isBooked": false
    //     }
    //   )
    // }
    // for (var col = Math.floor(columns/2)+1; col < columns; col ++){
    //   for (var row = 1; row <= rows; row++) {
    //     this.seatMap.push({
    //       "rowNumber": row,
    //       "colNumber": alphabets[col - 1],
    //       "isBooked": false
    //     })
    //   }
    // }
    console.log(this.seatMap);
  }
  addSeat(seatId:number){
    const output = document.getElementById('seat-'+seatId);
    if(output?.classList.contains("isSelected")){
      output.classList.remove("isSelected");  
      this.selectedSeats = this.selectedSeats.filter(seat => seat !== this.seatMap[seatId]);
      console.log(this.selectedSeats);
    } else if(output) {
      output.classList.add('isSelected');
      this.selectedSeats.push(this.seatMap[seatId]);
      console.log(this.selectedSeats); 
    }
  }
  bookSeats(){
    console.log(this.selectedSeats);
  }
  resetSelectedSeats(){
    this.selectedSeats=[];
  }
}


