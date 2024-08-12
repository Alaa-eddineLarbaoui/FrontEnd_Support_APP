import { Injectable } from '@angular/core';
import {LoginRequest} from "../login-component/app.login";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http : HttpClient) { }

  API_LOGIN = "http://localhost:8080/api/auth/login";
  Login(login: LoginRequest): Observable<any> {
      return this.http.post<string>(this.API_LOGIN, login);
  }
}
