import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  constructor(private theatreService:TheatreService) {
   }

  ngOnInit(): void {
  }
  onSubmit(myform:NgForm) {
    this.theatre = myform.value ; 
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
