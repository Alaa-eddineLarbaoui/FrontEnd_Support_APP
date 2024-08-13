import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EquipementStatus} from "../../Enums/EquipementStatus";
import {EquipementService} from "../../Services/equipement.service";
import {Equipement} from "../../Models/Equipement";

@Component({
  selector: 'app-equipemet-form',
  templateUrl: './equipemet-form.component.html',
  styleUrls: ['./equipemet-form.component.css']
})
export class EquipemetFormComponent implements OnInit{


  Addequiform!:FormGroup
  ngOnInit(): void {


    this.Addequiform=this.fb.group({
      id:'',
      name: '',
      type:'',
      purchase_Date:'',
      description: '',
      status:EquipementStatus
    })
  }
  constructor( private equipementService:EquipementService,private fb:FormBuilder) {
  }



  //function ADD equipement  *****************************************************************
  saveUser() {
    const FormValue=this.Addequiform.value;
    const equipement : Equipement={
      id : FormValue.id,
      name : FormValue.name,
      type : FormValue.type,
      description:FormValue.description,
      purchase_Date : FormValue.purchase_Date,
      status : FormValue.status,

    }
    console.log(FormValue.name)
    console.log(FormValue.type)
    console.log(FormValue.description)
    this.equipementService.Addequipement(equipement).subscribe()

// For empty the inputs after adding *************************************************
    this.Addequiform=this.fb.group({
      id:'',
      name: '',
      type:'',
      purchase_Date:'',
      description: '',
      status:EquipementStatus
    })
  }




}

