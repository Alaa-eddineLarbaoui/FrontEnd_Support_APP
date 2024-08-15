import {Component, OnInit} from '@angular/core';
import {PanneService} from "../../Services/panne.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Panne} from "../../Models/panne";
import {Equipement} from "../../Models/Equipement";
import {EquipementService} from "../../Services/equipement.service";
import {UserService} from "../../Services/user.service";
import {User} from "../../Models/User";
import {jwtDecode} from "jwt-decode";
import {TicketOfSupport} from "../../Models/TicketOfSupport";
import {TicketService} from "../../Services/ticket.service";
import {EtatTicket} from "../../Enums/EtatTicket";
import {TechnicienIT} from "../../Models/TechnicienIT";
import {Erole} from "../../Enums/Erole";

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
  constructor(private serviceP : PanneService, private fb : FormBuilder, private equipService:EquipementService, private serviceU : UserService, private serviceT : TicketService) {
  }
  ngOnInit(): void {
    this.getpannes();
    this.getEquipements();

    this.formTicket = this.fb.group({
      description: [''],
      creation_date: [''],
      equipement: [''],
      panne: ['']
    });

    const jwtData = localStorage.getItem('jwt');
    const username = localStorage.getItem('username');

    if (jwtData && username) {
      try {
        this.serviceU.getUser(username).subscribe(
          (data: User) => {
            this.user_id = data.id;
            console.log("User ID: " + data.id);
          },
          (error) => {
            console.error('Error fetching user:', error);
          }
        );
      } catch (error) {
        console.error('Error decoding JWT:', error);
      }
    } else {
      console.error('JWT data or username not found in localStorage');
    }
  }


  getpannes(){
    this.serviceP.get_pannes().subscribe((data : Panne[]) => {
      this.ListPanne = data;
    })
  }
  getEquipements(){

    this.equipService.ListEquips().subscribe((data :Equipement[])=>{
      this.equipements=data;
    });
  }


  submiting() {
    console.log("---000--- > " + this.user_id)
    if (this.formTicket.valid) {
      const formValues = this.formTicket.value;

      const newTicket: TicketOfSupport = {
        id_Ticket: 0,
        creation_date: formValues.creation_date,
        description: formValues.description,
        etatTicket: EtatTicket.IN_PROGRESS,
        user: {
          username : '',
          id : this.user_id,
          password : '',
          email : '',
          role:Erole.USER,

        },
        technicienIT: {} as TechnicienIT,
        equipement: { id: formValues.equipement } as Equipement,
        panne: {
          id_panne: formValues.panne,
          name:''
        },
      };

      this.serviceT.addTicktes(newTicket).subscribe(data => {
        console.log('Ticket added successfully');
      });
    }
  }



}
