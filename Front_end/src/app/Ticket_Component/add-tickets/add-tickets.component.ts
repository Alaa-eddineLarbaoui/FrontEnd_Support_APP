import {Component, OnInit} from '@angular/core';
import {PanneService} from "../../Services/panne.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Panne} from "../../Models/panne";
import {Equipement} from "../../Models/Equipement";
import {EquipementService} from "../../Services/equipement.service";
import {UserService} from "../../Services/user.service";
import {TicketService} from "../../Services/ticket.service";
import {JwtDto} from "../../Models/JwtDto";
import {TicketDto} from "../../Models/TicketDto";  // Import jwt-decode

@Component({
  selector: 'app-add-tickets',
  templateUrl: './add-tickets.component.html',
  styleUrls: ['./add-tickets.component.css']
})
export class AddTicketsComponent implements OnInit{
  ListPanne!:Panne[];
  formTicket!:FormGroup;
  equipements !:Equipement[];
  user_id !: number;

  constructor(private serviceP : PanneService, private fb : FormBuilder, private equipService:EquipementService, private serviceU : UserService, private serviceT : TicketService) {}

  ngOnInit(): void {
    const storedJwtData = localStorage.getItem('jwtData');
    if (storedJwtData) {
      const jwtData: JwtDto = JSON.parse(storedJwtData);
      this.user_id = jwtData.user_id;
    } else {
      console.error('JWT data not found in localStorage');
      // handle the case where JWT is not present
    }

    this.getpannes();
    this.getEquipements();

    this.formTicket = this.fb.group({
      equipement_id: [''],
      idPanne:['']
    });
  }

  // Function to extract user ID from JWT token

  getpannes(){
    this.serviceP.get_pannes().subscribe((data : Panne[]) => {
      this.ListPanne = data;
    });
  }

  getEquipements(){
    this.equipService.ListEquips().subscribe((data :Equipement[])=>{
      this.equipements=data;
    });
  }


  submiting() {
    console.log("userid " + this.user_id);
    console.log("eId " + this.formTicket.value.equipement_id);
    console.log("Pid " +  this.formTicket.value.idPanne);

    if (this.formTicket.valid) {
      const newTicket :TicketDto = {
        user_id : this.user_id,
        equipement_id : this.formTicket.value.equipement_id,
        panne_id: this.formTicket.value.idPanne,
      }

      this.serviceT.addTicktes(newTicket).subscribe({
        next: (data) => {
          console.log('Ticket added successfully');
        },error: (error) => {
          console.error('Error adding ticket:', error);
          if (error.status === 403) {
            console.error('Access denied. Please check your permissions.');
          }
        }
      });
    }
  }
}
