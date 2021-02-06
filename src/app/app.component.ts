import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/roles';
import { TheatreFacade } from './facade/TheatreFacade';
import { UserFacade } from './facade/UserFacade';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MTBS';
  
  constructor(private userFacade:UserFacade , private theatreFacade:TheatreFacade, private authService:AuthService) {
  }

  ngOnInit(): void {
    const jwt = localStorage.getItem("id_token");
    if(!(jwt === null) ) {
        this.authService.refreshUser(jwt).subscribe(actor => {
          console.log(actor);
          if(actor.role == Roles.USER.toString()) 
              this.userFacade.setUser(actor);
          else 
              this.theatreFacade.setTheatre(actor);
          
        })
    }
  }

}
