import {Component, OnInit} from '@angular/core';
import {PanneService} from "../../Services/panne.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Panne} from "../../Models/panne";
import {Equipement} from "../../Models/Equipement";
import {EquipementService} from "../../Services/equipement.service";
import {UserService} from "../../Services/user.service";
import {User} from "../../Models/User";

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
  constructor(private serviceP : PanneService, private fb : FormBuilder, private equipService:EquipementService, private serviceU : UserService) {
  }
  ngOnInit(): void {
    this.getpannes();
    this.getEquipements();

    console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhh")
    console.log(this.equipService.ListEquips())
    this.formTicket = this.fb.group({
      description: [''],
      creation_date: [''],
      equipement: [''],
      panne: ['']
    });

    const jwt: any = localStorage.getItem("jwt")
    const parseJwt =

    this.serviceU.getUser('ousama').subscribe((data : User) => {
        this.user_id = data.id;
    })
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


  submiting(){

  }


}
