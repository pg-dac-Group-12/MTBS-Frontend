import { HttpResponse } from "@angular/common/http";

class ResponseUtils {
      obj:Record<number,any> = {
        200 : function (x:HttpResponse<any>) {
            return x.body;
        },
        201: (x:HttpResponse<any>)=> {
            return x.body;
        },
        401: (x:HttpResponse<any>)=>{
            
        }
    }

     responseCheck(response: HttpResponse<any>): any {
      return this.obj[response.status]();
    }
}