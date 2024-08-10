import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = null;
    token= localStorage.getItem("Jwt");
    if (token){
      const cloned=req.clone({setHeaders:{Autorization:`Bearer ${token}`}});
      return next.handle(cloned);
    }
    return next.handle(req);
  }
}
