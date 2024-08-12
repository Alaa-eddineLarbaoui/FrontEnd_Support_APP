
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../Models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  api = `http://localhost:8080/api/user`

  constructor(private http: HttpClient) {

  }

  ListUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.api}/getUsers`);
  }

  getUser(idUser:number):Observable<any>{
    return this.http.get<Event>(`${this.api}/get`+idUser)
  }
  DeleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.api}/delete/` + id)
  }

}
