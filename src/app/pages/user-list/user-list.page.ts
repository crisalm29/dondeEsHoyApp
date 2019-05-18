import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  users: Observable<User[]>;

  constructor( private userService: UsersService ) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
