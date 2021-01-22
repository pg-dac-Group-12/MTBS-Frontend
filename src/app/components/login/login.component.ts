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


  onSubmit(myform:NgForm){
    this.authService.authenticateUser(this.email,this.password,this.isTheatreAdmin).subscribe(response =>{
      if(response.status == 200){
        //redirect to
      } else if(response.status == 401){
        this.message = "invalid credentials";
      }
    })
  }
  navigateToMovieList(){
    this.router.navigateByUrl("/movie-list")
  }
}
