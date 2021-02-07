import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ShowsFacade } from 'src/app/facade/ShowsFacade';
@Component({
  selector: 'app-user-dashboard-page',
  templateUrl: './user-dashboard-page.component.html',
  styleUrls: ['./user-dashboard-page.component.css']
})
export class UserDashboardPageComponent implements OnInit {
    user:User = {
      id:1,
      name:"aa" ,
      email:"aaa",
      password:"44",
      phoneNo:"44",
      tickets: null
  }
  constructor() { }

  ngOnInit(): void { 
  }

  getUser(id:number){
    this.userFacade.loadUserById(userId);
    
  } 

}
 