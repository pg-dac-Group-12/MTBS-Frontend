import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'src/app/components/login/login.component';
import { TheatreFacade } from 'src/app/facade/TheatreFacade';
import { UserFacade } from 'src/app/facade/UserFacade';
import { Theatre } from 'src/app/models/theatre.model';
import { User } from 'src/app/models/user.model';
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
  user!:User;
  theatre!:Theatre;
  constructor(private modalService:NgbModal , private userFacade:UserFacade, private theatreFacade:TheatreFacade) { }

  ngOnInit(): void {
    this.refreshUser()
  }

  refreshUser() {
    this.userFacade.getUser().subscribe(user => {
      if(user.id == 0){
        console.log(user);
          this.theatreFacade.getTheatre().subscribe(theatre => {
            if(theatre == null)
              this.loggedIn = false ;
            else {
                this.loggedIn = true ;
                this.theatre = theatre ;
            }  
          })
      } else {
        this.loggedIn = true ;
        this.showTicketsMenu = true ;
      }
    })
}

  openLoginModal() {
    this.currentDialog = this.modalService.open(LoginComponent);
    this.refreshUser();
  }

  logout() {
    console.log("User Logged In")
    localStorage.removeItem('id_token');
    this.loggedIn = false ;
  }

}
