import { HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

export class Utils {
    static obj:Record<number,any> = {
        200 : function (response:HttpResponse<any>) {
            return response.body;
        },
        201: (response:HttpResponse<any>)=> {
            return response.body;
        },
        401: (response:HttpResponse<any>):any=>{
            //directives
            return null;
        }
    }

   static validateResponse(observable: Observable<HttpResponse<any>>): any {
         return observable.subscribe(
             (response)=>{return this.obj[response.status]()}
         )
    }
}