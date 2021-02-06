import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserFacade} from 'src/app/facade/UserFacade';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  // response = new HttpResponse<User>();
  user!: User;
  constructor(private userFacade : UserFacade) {
  }

  ngOnInit(): void {

    this.userFacade.getUser().subscribe(user => this.user = user )
    console.log(this.user);
  }

  onSubmit(myform:NgForm) {
    //this.user = myform.value ; 
    console.log(this.user);
    this.userFacade.updateUser(this.user)
  }

  deleteUser() {
    this.userFacade.deleteUser(this.user)
  }

  changePassword(){
    console.log(this.user.id);
  }
  getTickets(){
    console.log(this.user.id);
  }
}
