import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  usersList: User[] = [];
  roles: string[] = [];
  activeUsers: User[] = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((response) => {
      this.usersList = response;
      this.getRoles();
    });
  }

  getRoles() {
    this.roles =  [...new Set(this.usersList.map(item => item.role))]; 
    this.activeUsers = [...new Set(this.usersList.filter(item => item.isActive))];
  }

}
