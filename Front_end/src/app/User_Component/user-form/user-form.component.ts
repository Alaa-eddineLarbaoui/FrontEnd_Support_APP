import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { User } from '../../Models/User';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  listUser: User[] = [];
  errorMessage: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.ListUsers().subscribe(
      (data: User[]) => {
        this.listUser = data;
        console.log('Fetched users:', data);
      },
      (error) => {
        console.error('Error fetching users:', error);
        this.errorMessage = 'Unable to fetch users. Please check your permissions.';
      }
    );
  }
}
