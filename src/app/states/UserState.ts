import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { User } from "../models/user.model";

@Injectable({
    providedIn:'root'
})
export  class UserState {
    private user$ = new BehaviorSubject<User>({"email":"","id":0,"name":"","password":"","phoneNo":"","tickets":[]});

    getUser(){
        return this.user$.value;
    }

    setUser(user$:User){
        this.user$.next(user$);
    }

    setEmptyUser() {
        this.user$.next({"email":"","id":0,"name":"","password":"","phoneNo":"","tickets":[]})
    }
    // updateUser(user:User){
    //     let currentUser = this.user$.getValue();
    //     currentUser = user;
    // }

    // deleteUser(user:User) {
    //     const currentValue = this.user$.getValue().;
    // }
}