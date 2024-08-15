import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TicketOfSupport} from "../Models/TicketOfSupport";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  api_add_teckt = 'http://localhost:8080/api/ticket/add_tickets'
  constructor(private http:HttpClient) { }

  addTicktes(ticket : TicketOfSupport):Observable<TicketOfSupport>{
    return this.http.post<TicketOfSupport>(this.api_add_teckt, ticket);
  }
}
