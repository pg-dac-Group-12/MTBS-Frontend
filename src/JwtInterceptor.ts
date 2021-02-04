import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem("id_token");
        console.log("token : " +token);
        if (token != null) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                    "Access-Control-Allow-Origin":"*" 
                }
            });
        } 
        return next.handle(request);
    }
    
}