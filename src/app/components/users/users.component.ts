import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../interfaces/userInterfase';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: Array<User> = [];
  constructor(
    public usersService: UsersService
  ) { }

    /**
     * метод отримання данних про всіх користувачів
     */
  ngOnInit() {
    this.usersService.getUsers().subscribe((users) => this.users = users);
  }


}
