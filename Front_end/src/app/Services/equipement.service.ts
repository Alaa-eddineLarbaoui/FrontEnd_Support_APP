import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../Models/User";
import {Equipement} from "../Models/Equipement";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EquipementService {

  api = `http://localhost:8080/api/equipement/`
  api_getAll_Equi='http://localhost:8080/api/equipement/getAll'

  constructor(private http: HttpClient) {
  }

  Addequipement (formdata:Equipement){
    return this.http.post(this.api+ 'add',formdata)
  }
  deleteEquip (id:number){
    return this.http.delete(`${this.api}delete/${id}`)
  }
  ListEquips(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(this.api_getAll_Equi);
  }

     getEquipById(id: number): Observable<Equipement> {
       return this.http.get<Equipement>(`${this.api}get/${id}`)
     }




  getUser(idUser:number):Observable<any>{
    return this.http.get<User>(`${this.api}/get/`+idUser)
  }
  public updateEquip(id:number,equipement:Equipement){
    return this.http.put(this.api+"update/"+id,equipement)
  }
}
