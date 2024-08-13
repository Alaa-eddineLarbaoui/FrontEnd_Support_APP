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

  constructor(private http: HttpClient) {
  }

  Addequipement (formdata:Equipement){
    return this.http.post(this.api+ 'add',formdata)
  }
  deleteEquip (id:number){
    return this.http.delete(this.api+'delete'+{id})
  }
  ListEquips(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(`${this.api}getAll`);
  }
}
