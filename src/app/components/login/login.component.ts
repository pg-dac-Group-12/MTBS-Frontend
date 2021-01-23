import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string = "";
  email:string = "";
  password:string = "";
  isTheatreAdmin:boolean = false;
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }


  // onSubmit(myform:NgForm){

  //   this.authService.authenticateUser(myform.,this.password,this.isTheatreAdmin);
  // }

  login(myform:NgForm) {
    console.log(myform);
    this.authService.authenticateUser(myform.value.email,myform.value.password,this.isTheatreAdmin);
    this.router.navigateByUrl("/movie_list")
  }
  
  navigateToMovieList(){
  }
}
