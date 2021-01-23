import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { UserFacade} from 'src/app/facade/UserFacade';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  response = new HttpResponse<User>();
  user!: User;
  constructor(private userFacade : UserFacade) {

  }

  ngOnInit(): void {
    this.userFacade.getUser();    
  }

  onSubmit(myform:NgForm) {
    this.user = myform.value ; 
    this.userFacade.updateUser(this.user)
  }

  deleteUser() {
    this.userFacade.deleteUser(this.user)
  }

  changePassword(){
    //redirect to change password page
  }
}
