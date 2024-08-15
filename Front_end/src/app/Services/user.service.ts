
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

  getUser(username:string):Observable<User>{
    return this.http.get<User>(this.api + "/findByName/" +username);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.api}/delete/` + id)
  }


  Adduser(formdata:User){
    return this.http.post( 'http://localhost:8080/api/auth/signup',formdata)
  }

  public updateUser(id:any,user:User){
    return this.http.put(this.api+"/update/"+id,user)
  }


}
