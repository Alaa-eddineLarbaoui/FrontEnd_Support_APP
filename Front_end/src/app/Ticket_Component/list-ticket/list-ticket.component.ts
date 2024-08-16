import {Component, OnInit} from '@angular/core';

import {TicketService} from "../../Services/ticket.service";
import {TicketOfSupport} from "../../Models/TicketOfSupport";

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit{

  listTicket: TicketOfSupport[] = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.getTickets();
  }


  getTickets(): void {
    this.ticketService.ListTicket().subscribe((data: TicketOfSupport[]) => {
      this.listTicket = data;
    });
  }

  }
