import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Erole } from "../../Enums/Erole";
import { UserService } from "../../Services/user.service";
import { User } from "../../Models/User";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  AddUserform!: FormGroup;
  iduser: any;
  usert !: User;
  isUpdateMode: boolean = false;


  constructor(private routes:Router,private userService: UserService, private fb: FormBuilder, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.AddUserform = this.fb.group({
      id: '',           // Field for user ID
      username: '',
      password: '',
      email: '',
    });

  }

  // Function to add a user
  saveUser() {
    const user: User = {
      id: 0,  // Set to 0 for new users
      username: this.AddUserform.value.username,
      password: this.AddUserform.value.password,
      email: this.AddUserform.value.email,
      role: Erole.USER
    };
    this.userService.Adduser(user).subscribe()

    // Logique to clear the form after adding or updating

    this.AddUserform=this.fb.group({
      username:'',
      password:'',
      email:'',
    })
  }




}
