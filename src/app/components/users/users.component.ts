import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  pageTitle: string = 'Users';
  usersList: User[] = [];
  searchForm: FormGroup;
  loadingUsers: boolean = false;
  alertClosed = true;
  constructor(private userService: UserService, private formBuilder: FormBuilder, 
    private router: Router) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      keyword: ['']
    });
    this.getUsers();

    this.searchForm.valueChanges.subscribe((newValue)=> {
      this.search(newValue.keyword);
    });
  }

  getUsers(){
    this.loadingUsers = true;
    this.userService.getUsers().subscribe((response)=>{
      this.usersList = response;
      this.loadingUsers = false;
    });
  }

  onEdit(userName: string){
    this.router.navigate([`edit-user/${userName}`]);
  }
  onDelete(userName: string){
    this.userService.deleteUser(userName)
    .then(()=> { this.alertClosed = false;} )
    .catch(()=> { console.log('error deleting'); } );
  }

  search(keyword: string) {
    this.userService.getUsers().subscribe((response)=>{
      this.usersList = response.filter(user => {
        return (user.userName.toLowerCase().match(keyword) || 
        user.role.toLowerCase().match(keyword));
      });
    });
  }

  searchReset() {
    this.searchForm.patchValue({keyword: ''});
  }

}
