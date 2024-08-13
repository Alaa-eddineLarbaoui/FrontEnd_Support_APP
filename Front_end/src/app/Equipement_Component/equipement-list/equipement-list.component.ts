import {Component, OnInit} from '@angular/core';
import {Equipement} from "../../Models/Equipement";
import {EquipementService} from "../../Services/equipement.service";

@Component({
  selector: 'app-equipement-list',
  templateUrl: './equipement-list.component.html',
  styleUrls: ['./equipement-list.component.css']
})
export class EquipementListComponent implements OnInit{


  listEquipement: Equipement[] = [];
  errorMessage: string = '';

  constructor(private equipementService: EquipementService) { }

  ngOnInit(): void {

    this.getEquipement();
  }



  getEquipement(): void {
    this.equipementService.ListEquips().subscribe((data: Equipement[]) => {
      this.listEquipement = data;
    });
  }
}
