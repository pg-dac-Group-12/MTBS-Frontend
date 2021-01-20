import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  response = new HttpResponse<User>();
  user!: User;
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    if(this.userService.getUser()){
      // this.user = this.userService.user;
    }
  }

  onSubmit(myform:NgForm) {
    this.user = myform.value ; 
    if(this.userService.updateUser(this.user,this.user.id)){
      this.user = this.userService.user;
    }
  }

  deleteUser() {
    if (this.user.id != 0) {
      this.userService.deleteUser(this.user.id).subscribe((response) => this.response = response);
      if (this.response.status == 200) {
        // user deleted
      }
    }else{
      //failed to delete
    }
  }

  changePassword(){
    //redirect to change password page
  }
}
