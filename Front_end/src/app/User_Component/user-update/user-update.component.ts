import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../../Models/User";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../Services/user.service";
import {Erole} from "../../Enums/Erole";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  AddUserform!: FormGroup;
  iduser: any;
  usert !: User;
  isUpdateMode: boolean = false;


  constructor(private routes: Router, private userService: UserService, private fb: FormBuilder, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.AddUserform = this.fb.group({
      id: '',
      username: '',
      password: '',
      email: '',
    });
    this.iduser = this.route.snapshot.paramMap.get("id")
    if (this.iduser) {
      this.isUpdateMode = true;
      this.getUser();
    }
  }


  // Function to update a user
  updateUser() {
    const user: User = {
      id: this.AddUserform.value.id,  // Use the ID from the form
      username: this.AddUserform.value.username,
      password: this.AddUserform.value.password,
      email: this.AddUserform.value.email,
      role: Erole.USER
    };

    this.userService.updateUser(user.id, user).subscribe(d => {
      console.log('User updated:', d);
      this.clearForm();
    });
  }

  // Function to clear the form after updating
  clearForm() {
    this.AddUserform.reset({
      id: '',        // Reset ID
      username: '',
      password: '',
      email: '',
    });
  }


  getUser(): void {
    console.log('functiooooooooooooooooo')
    if (this.iduser) {
      this.userService.getUser(this.iduser).subscribe(
        (user: User) => {
          this.AddUserform.patchValue(user);
          console.log(user);
        },
      );
    }
  }
}
