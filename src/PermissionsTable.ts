import { UrlSegment } from "@angular/router";
import { Roles } from "./roles";

export class PermssionsTable {
    static readonly permssions: Record<string,string> = {
        "/user/show_list": Roles.User.toString()
    }   
    static urlString: string = "";
    static isPermitted( url:UrlSegment[], role:String):boolean {
        url.map(urlItem => this.urlString.concat(urlItem.path));
        return this.permssions[this.urlString] === role ;
    }
}