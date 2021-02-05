import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'src/app/components/login/login.component';
import { Roles } from 'src/roles';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn:boolean = false ;
  showTicketsMenu:boolean = false ;
  currentDialog:any ;
  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
  }

  openLoginModal() {
    this.currentDialog = this.modalService.open(LoginComponent);
    this.currentDialog.closed.subscribe((resp:any) => {
      if(resp.actor.role === Roles.USER)
        this.showTicketsMenu = true ;
      this.loggedIn = true ;  
      console.log("Hello")
    })
  }
  logout() {
    console.log("User Logged In")
    localStorage.removeItem('id_token');
    this.loggedIn = false ;
  }

}
