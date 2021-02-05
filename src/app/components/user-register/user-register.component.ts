import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  user!:User;
  message:string ="";
  constructor(private userService :UserService , private activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }

  close() {
    this.activeModal.close();
  }

  onSubmit(myform:NgForm) {
    this.user = myform.value ; 
    this.userService.createUser(this.user).subscribe(response =>{
      if(response.status == 201){
        //registered. redirect?
        this.message="Registration Succesfull";
      } else if (response.status == 400){
        this.message = "Registration Failed";
      }
    });
  }
}
