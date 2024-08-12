import {Component, OnInit} from '@angular/core';
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {


  ngOnInit(): void {
    this.ListContacts()


  }


  constructor(private userService: UserService) {
  }


  ListUsers(): void {
    this.userService.showAllMessages().subscribe((data: Contact[]) => {
      this.GetContacts = data;

    })
  }
