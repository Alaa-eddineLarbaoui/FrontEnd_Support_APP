import {Component, OnInit} from '@angular/core';
import {PanneService} from "../Services/panne.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Panne} from "../Models/panne";

@Component({
  selector: 'app-add-tickets',
  templateUrl: './add-tickets.component.html',
  styleUrls: ['./add-tickets.component.css']
})
export class AddTicketsComponent implements OnInit{
  ListPanne!:Panne[];
  formTicket!:FormGroup;
  constructor(private serviceP : PanneService, private fb : FormBuilder) {
  }
  ngOnInit(): void {
    this.serviceP.get_pannes().subscribe((data : Panne[]) => {
      this.ListPanne = data;
    })
  }

  submiting(){

  }


}
