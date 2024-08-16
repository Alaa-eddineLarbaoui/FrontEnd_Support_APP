import {Component, OnInit} from '@angular/core';
import {User} from "../../Models/User";
import {UserService} from "../../Services/user.service";
import {Panne} from "../../Models/panne";
import {PanneService} from "../../Services/panne.service";

@Component({
  selector: 'app-list-panne',
  templateUrl: './list-panne.component.html',
  styleUrls: ['./list-panne.component.css']
})
export class ListPanneComponent implements OnInit{


  listpanne: Panne[] = [];
  errorMessage: string = '';

  constructor(private panneService: PanneService) { }

  ngOnInit(): void {
    this.getpanne();
  }


  getpanne(): void {
    this.panneService.get_pannes().subscribe((data: Panne[]) => {
      this.listpanne = data;
    });
  }
  deletepanne(id: number): void {
    this.panneService.deletepanne(id).subscribe(
      () => {
        this.getpanne()
      }

    );
  }
}
