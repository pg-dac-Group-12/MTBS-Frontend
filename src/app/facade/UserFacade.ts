import { UserService } from "../services/user.service";
import { UserState } from "../states/UserState";

import "../states/MovieState";
import { User } from "../models/user.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class UserFacade {
    
    constructor(private userService:UserService , private userState$:UserState) {}
    
    getUser() {
        return this.userState$.getUser();
    }
    setUser(user:User) {
        return this.userState$.setUser(user);
    }
    createUser(user:User) {
        this.userService.createUser(user);
        this.userState$.setUser(user);
    }
    deleteUser(user:User) {
        this.userService.deleteUser(user.id);
        this.userState$.setUser(null!);
    }
    updateUser(user:User){
        this.userService.updateUser(user,user.id);
        this.userState$.setUser(user);
    }
    loadUserById(id:number) {
        return this.userService.getUser(); // getUserById
    }
    
}