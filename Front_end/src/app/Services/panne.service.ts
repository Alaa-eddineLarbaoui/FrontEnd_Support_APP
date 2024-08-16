import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Panne} from "../Models/panne";
import {User} from "../Models/User";

@Injectable({
  providedIn: 'root'
})
export class PanneService {

  api_get_all_pannes = "http://localhost:8080/api/panne/getAll"
  api ='http://localhost:8080/api/panne'
  constructor(private  http : HttpClient) { }

  get_pannes():Observable<Panne[]>{
    return this.http.get<Panne[]>(this.api_get_all_pannes)
  }

  getUser(idUser:number):Observable<any>{
    return this.http.get<User>(`${this.api}/get/`+idUser)
  }
  deletepanne(id: number): Observable<any> {
    return this.http.delete(`${this.api}/delete/` + id)
  }


  addpanne(formdata:Panne){
    return this.http.post( 'http://localhost:8080/api/auth/signup',formdata)
  }

  public updatepanne(id:any,panne:Panne){
    return this.http.put(this.api+"/update/"+id,panne)
  }



}
