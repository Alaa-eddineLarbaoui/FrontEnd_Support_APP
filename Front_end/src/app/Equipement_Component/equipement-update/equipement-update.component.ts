import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Equipement} from "../../Models/Equipement";
import {ActivatedRoute, Router} from "@angular/router";
import {EquipementService} from "../../Services/equipement.service";
import {EquipementStatus} from "../../Enums/EquipementStatus";

@Component({
  selector: 'app-equipement-update',
  templateUrl: './equipement-update.component.html',
  styleUrls: ['./equipement-update.component.css']
})
export class EquipementUpdateComponent implements  OnInit{

  UpdateEquipForm!: FormGroup;
  idEquip: any;
  equipement!: Equipement;
  isUpdateMode: boolean = false;

  constructor(
    private routes: Router,
    private equipementService: EquipementService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.UpdateEquipForm = this.fb.group({
      id: '',              // Champ pour l'ID de l'équipement
      name: '',
      type: '',
      purchase_Date: '',
      description: '',
      status: EquipementStatus.ACTIVE,  // Exemple de statut par défaut
    });

    this.idEquip = this.route.snapshot.paramMap.get("id")
    if (this.idEquip) {
      this.isUpdateMode = true;
      this.getEquip();
    }
  }

  // Fonction pour mettre à jour un équipement
  updateEquip() {
    const equipement: Equipement = {
      id: this.UpdateEquipForm.value.id,  // Utilise l'ID du formulaire
      name: this.UpdateEquipForm.value.name,
      type: this.UpdateEquipForm.value.type,
      purchase_Date: this.UpdateEquipForm.value.purchase_Date,
      description: this.UpdateEquipForm.value.description,
      status: this.UpdateEquipForm.value.status
    };

    this.equipementService.updateEquip(equipement.id, equipement).subscribe(d => {
      console.log('Equipement mis à jour:', d);
      this.clearForm();
    });
  }

  // Fonction pour réinitialiser le formulaire après mise à jour
  clearForm() {
    this.UpdateEquipForm.reset({
      id: '',
      name: '',
      type: '',
      purchase_Date: '',
      description: '',
      status: EquipementStatus.ACTIVE,  // Réinitialise le statut
    });
  }

  // Fonction pour récupérer un équipement par son ID
  getEquip(): void {
    if (this.idEquip) {
      this.equipementService.getEquipById(this.idEquip).subscribe(
        (equipement: Equipement) => {
          this.UpdateEquipForm.patchValue(equipement);
          console.log(equipement);
        },
      );
    }
  }
}
