import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Panne} from "../Models/panne";

@Injectable({
  providedIn: 'root'
})
export class PanneService {

  api_get_all_pannes = "http://localhost:8080/api/panne/getAll"
  constructor(private  http : HttpClient) { }

  get_pannes():Observable<Panne[]>{
    return this.http.get<Panne[]>(this.api_get_all_pannes)
  }
}
