import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TheatreFacade } from 'src/app/facade/TheatreFacade';
import { UserFacade } from 'src/app/facade/UserFacade';
import { Theatre } from 'src/app/models/theatre.model';
import { User } from 'src/app/models/user.model';
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
  constructor(private authService:AuthService, private userFacade:UserFacade, private theatreFacade:TheatreFacade ,private router:Router) { }

  ngOnInit(): void {
  }


  // onSubmit(myform:NgForm){

  //   this.authService.authenticateUser(myform.,this.password,this.isTheatreAdmin);
  // }

  login(myform:NgForm) {
    this.authService.authenticateUser(myform.value.email,myform.value.password,this.isTheatreAdmin)
    .subscribe(resp => {
      localStorage.setItem('id_token', resp.jwt)
      if(resp == null)
        this.router.navigateByUrl("/login");
      else {
            if(!this.isTheatreAdmin) {
              this.userFacade.setUser(resp.actor);
          } else {
            this.theatreFacade.setTheatre(resp.actor);
          }
      }
      this.router.navigateByUrl("/user")
    })
  }   
}
