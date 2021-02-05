import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TheatreFacade } from 'src/app/facade/TheatreFacade';
import { UserFacade } from 'src/app/facade/UserFacade';
import { AuthService } from 'src/app/services/auth.service';
import { Roles } from 'src/roles';
import { TheatreRegisterComponent } from '../theatre-register/theatre-register.component';
import { UserRegisterComponent } from '../user-register/user-register.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string = "";
  email:string = "";
  password:string = "";
  isTheatreAdmin:boolean = true;
  constructor(private authService:AuthService, private activeModal:NgbActiveModal,
     private modalService:NgbModal ,private userFacade:UserFacade, private theatreFacade:TheatreFacade ,
     private router:Router) { }

  ngOnInit(): void {
  }


  // onSubmit(myform:NgForm){

  //   this.authService.authenticateUser(myform.,this.password,this.isTheatreAdmin);
  // }

  close() {
    this.activeModal.close();
  }

  login(myform:NgForm) {
    this.authService.authenticateUser(myform.value.email,myform.value.password,this.isTheatreAdmin)
    .subscribe(resp => {
      if(resp == null)
        this.message = "Email or Password is incorrect"
      else {
        console.log(resp);
        localStorage.setItem('id_token', resp.jwt)
          this.activeModal.close(resp);
          console.log(Roles.USER.toString())
          if(resp.actor.role === Roles.USER.toString()) {
              console.log(resp.actor);
              this.userFacade.setUser(resp.actor);
              this.router.navigateByUrl("/");
          } else {
            this.theatreFacade.setTheatre(resp.actor);
              //document.getElementById('login-btn')?.setAttribute("data-bs-dismiss","modal");
            this.router.navigateByUrl("/theatre");
          }
      }
      
    })
  }   
  openUserRegisterModal() {
    this.close();
    this.modalService.open(UserRegisterComponent);
  }
  openTheatreRegisterModal() {
    this.close();
    this.modalService.open(TheatreRegisterComponent, {size:"lg"});
  }
}
