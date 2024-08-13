import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Erole} from "../../Enums/Erole";
import {UserService} from "../../Services/user.service";
import {User} from "../../Models/User";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  AddUserform!: FormGroup

  ngOnInit(): void {
    this.AddUserform = this.fb.group({
      id:'',
      username: '',
      password: '',
      email: '',
    })
  }

  constructor(private userService: UserService, private fb: FormBuilder) {
  }


  //function ADD USER *****************************************************************
  saveUser() {
    const user: User = {
      id: 0,
      username: this.AddUserform.value.username,
      password: this.AddUserform.value.password,
      email: this.AddUserform.value.email,
      role: Erole.USER
    }
    this.userService.Adduser(user).subscribe(d =>{
      console.log(d)
    })

// For empty the inputs after adding *************************************************
    this.AddUserform = this.fb.group({
      id:'',
      username: '',
      password: '',
      email: '',
    })
  }
}
