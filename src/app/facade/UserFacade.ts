import { UserService } from "../services/user.service";
import { UserState } from "../states/UserState";

import "../states/MovieState";
import { tap } from "rxjs/operators";
import { User } from "../models/user.model";
export class MovieFacade {
    
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

    loadUserById(id:number) {
        return this.userService.getUser(); // getUserById
    }
    
}