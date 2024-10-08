import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { User } from '../../Models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  listUser: User[] = [];
  errorMessage: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers(): void {
    this.userService.ListUsers().subscribe((data: User[]) => {
      this.listUser = data;
    });
  }
  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(
      () => {
        this.getUsers()
      },

    );
  }
}
