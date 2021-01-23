import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Roles } from "./roles";
import jwt_decode from "jwt-decode";
import { PermssionsTable } from "./PermissionsTable"; 
export class AuthGuards implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let jwt = localStorage.getItem("id_token");
        let role:String=   jwt_decode(jwt!); ;
        return PermssionsTable.isPermitted(route.url,role);
    }
}