import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ShowsFacade } from 'src/app/facade/ShowsFacade';
import { Seat } from 'src/app/models/seat.model';
import { Shows } from 'src/app/models/shows.model';
import { TicketPageComponent } from 'src/app/user-workflow/ticket-page/ticket-page.component';
import { TicketComponent } from 'src/app/user-workflow/ticket/ticket.component';

@Component({
  selector: 'app-seat-map',
  templateUrl: './seat-map.component.html',
  styleUrls: ['./seat-map.component.css']
})
export class SeatMapComponent implements OnInit {
  @Input() seatMap: Seat[]=[];
  @Input() showId!:number;
  rows!:number;
  columns!:number;
  selectedSeats:Seat[]=[];
  show!:Shows;
  currentDialog!:any;
  // rows!:number;
  // columns!:number;

  constructor(private showsFacade:ShowsFacade , private modalService:NgbModal) { }

  ngOnInit(): void {
    //this.show = this.showsFacade.getShowByID(this.showID);
    console.log(this.showId);
    this.show = this.showsFacade.getShowById(this.showId);
    console.log(this.show);
    this.seatMap = this.show.seatmap;
    console.log(this.seatMap);
    this.countRowsAndColumns();
  }
  countRowsAndColumns(){
    for ( var i = 0 ; i < this.seatMap.length; i++){     
      if(this.seatMap[i].colNumber === 'B'){
        this.rows = i -1;
        break;
      }
    }
    this.columns = Math.floor(this.seatMap.length/this.rows);
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
    this.currentDialog = this.modalService.open(TicketPageComponent,{});
    this.currentDialog.componentInstance.showId = this.showId;
    this.currentDialog.componentInstance.selectedSeats = this.selectedSeats;
  }
  resetSelectedSeats(){
    this.selectedSeats=[];
  }
}


