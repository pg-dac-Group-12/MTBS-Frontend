import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TheatreFacade } from 'src/app/facade/TheatreFacade';
import { UserFacade } from 'src/app/facade/UserFacade';
import { AuthService } from 'src/app/services/auth.service';
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
  isTheatreAdmin:boolean = false;
  constructor(private authService:AuthService, private activeModal:NgbActiveModal, private modalService:NgbModal ,private userFacade:UserFacade, private theatreFacade:TheatreFacade ,private router:Router) { }

  ngOnInit(): void {
  }


  // onSubmit(myform:NgForm){

  //   this.authService.authenticateUser(myform.,this.password,this.isTheatreAdmin);
  // }

  close() {
    this.activeModal.close();
  }

  login(myform:NgForm) {
    close();
    this.authService.authenticateUser(myform.value.email,myform.value.password,this.isTheatreAdmin)
    .subscribe(resp => {
      localStorage.setItem('id_token', resp.jwt)
      if(resp == null)
        this.router.navigateByUrl("/login");
      else {
          this.close();
          if(!this.isTheatreAdmin) {
              console.log(resp.actor);
              this.userFacade.setUser(resp.actor);
              this.router.navigateByUrl("/");
          } else {
            this.theatreFacade.setTheatre(resp.actor);
            this.router.navigateByUrl("/theatre");
          }
      }
      
    })
  }   
  openUserRegisterModal() {
    close();
    this.modalService.open(UserRegisterComponent);
  }
}
