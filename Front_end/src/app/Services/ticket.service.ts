import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TicketOfSupport} from "../Models/TicketOfSupport";
import {User} from "../Models/User";
import {TicketDto} from "../Models/TicketDto";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  api_add_teckt = 'http://localhost:8080/api/ticket/add_tickets'
  api='http://localhost:8080/api/ticket/allTicket'
  constructor(private http:HttpClient) { }

  addTicktes(ticket : TicketDto):Observable<string>{
    return this.http.post<string>(this.api_add_teckt, ticket);
  }

  ListTicket(): Observable<TicketOfSupport[]> {
    return this.http.get<TicketOfSupport[]>(this.api);
  }

}
