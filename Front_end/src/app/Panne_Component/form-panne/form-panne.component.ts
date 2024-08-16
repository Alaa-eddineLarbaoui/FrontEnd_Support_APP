import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../../Models/User";
import {ActivatedRoute, Router} from "@angular/router";
import {Panne} from "../../Models/panne";
import {PanneService} from "../../Services/panne.service";

@Component({
  selector: 'app-form-panne',
  templateUrl: './form-panne.component.html',
  styleUrls: ['./form-panne.component.css']
})
export class FormPanneComponent implements OnInit {


  AddPanneform!: FormGroup;
  isUpdateMode: boolean = false;


  constructor(private routes: Router, private panneService: PanneService, private fb: FormBuilder, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.AddPanneform = this.fb.group({
      idPanne: '',
      name: '',
    });

  }

  // Function to add a user
  savepanne() {
    const panne: Panne = {
      idPanne: 0,
      name: this.AddPanneform.value.username,

    };
    this.panneService.addpanne(panne).subscribe()


    this.AddPanneform = this.fb.group({
      name: '',

    })
  }
}
