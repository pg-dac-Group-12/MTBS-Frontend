import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Theatre } from 'src/app/models/theatre.model';
import { TheatreService } from 'src/app/services/theatre.service';

@Component({
  selector: 'app-theatre-register',
  templateUrl: './theatre-register.component.html',
  styleUrls: ['./theatre-register.component.css']
})
export class TheatreRegisterComponent implements OnInit {
  theatre!:Theatre;
  message!:string;
  constructor(private theatreService:TheatreService, private activeModal:NgbActiveModal) {
   }

  ngOnInit(): void {
  }

  close() {
    this.activeModal.close();
  }

  onSubmit(myform:NgForm) {
    console.log(myform);
    this.theatre = myform.value ; 
    console.log(this.theatre);
    this.theatreService.createTheatre(this.theatre).subscribe(response =>{
      if(response.status == 201){
        //registered. redirect?
        this.message="Registration Succesfull";
      } else if (response.status == 400){
        this.message = "Registration Failed";
      }
    });
  }
}
